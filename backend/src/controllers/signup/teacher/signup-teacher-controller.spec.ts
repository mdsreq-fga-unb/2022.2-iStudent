import { AccountTeacherModel } from '../../../domain/models/account'
import { AddTeacherAccount, addTeacherAccountModel } from '../../../domain/useCases/addTeacherAccount'
import { EmailInUseError, ServerError } from '../../errors'
import { MissingParamError } from '../../errors/missign-param-errors'
import { badRequest, forbidden, serverError } from '../../helpers/http/http-helper'
import { HttpRequest } from '../../protocols'
import { Validation } from '../../protocols/validation'
import { SignUpTeacherController } from './signup-teacher-controller'

interface SutTypes {
    sut: SignUpTeacherController
    addTeacherAccountStub: AddTeacherAccount
    validationStub: Validation
}

const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        confirmationPassword: 'any_password',
        photo_url: 'any_photo_url',
        whatsapp: 'any_whatsapp',
        biography: 'any_biography',
        materials: [
            {
                name: 'any_material_name',
            }
        ],
        costPerHour: 30,
        disponibility: "10/10/2020",
    }
})

const makeFakeAccount = (): AccountTeacherModel => ({
    id: "valid_id",
    name: "valid_name",
    email: "valid_email",
    password: "valid_password",
    photo_url: "valid_photo_url",
    whatsapp: "valid_whatsapp",
    biography: "valid_biography",
    materials: [
        {
            name: "valid_name_material"
        }
    ],
    costPerHour: 10,
    disponibility: "valid_disponibility"
})

const makeAddTeacherAccount = (): AddTeacherAccount => {
    class AddTeacherAccountStub implements AddTeacherAccount {
        addTeacher(account: addTeacherAccountModel): Promise<AccountTeacherModel> {
            return new Promise(resolve => resolve(makeFakeAccount()))
        }
    }
    return new AddTeacherAccountStub()
}

const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
        validate(input: any): Error {
            return null
        }
    }
    return new ValidationStub()
}

const makeSut = (): SutTypes => {
    const addTeacherAccountStub = makeAddTeacherAccount()
    const validationStub = makeValidation()
    const sut = new SignUpTeacherController(addTeacherAccountStub, validationStub)
    return {
        sut,
        validationStub,
        addTeacherAccountStub
    }
}

describe('SignUpTeacher Controller', () => {
    test('should return 200', async () => {
        const { sut } = makeSut()
        const httpRequest = makeFakeRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
    })

    test('should call AddTeacherAccount with correct values', () => {
        const { sut, addTeacherAccountStub } = makeSut()
        const addSpy = jest.spyOn(addTeacherAccountStub, 'addTeacher')
        sut.handle(makeFakeRequest())
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_email@email.com',
            password: 'any_password',
            photo_url: 'any_photo_url',
            whatsapp: 'any_whatsapp',
            biography: 'any_biography',
            materials: [
                {
                    name: 'any_material_name',
                }
            ],
            costPerHour: 30,
            disponibility: "10/10/2020",
        })
    })

    test('should return 500 if AddTeacherAccount throws', async () => {
        const { sut, addTeacherAccountStub } = makeSut()
        jest.spyOn(addTeacherAccountStub, 'addTeacher').mockImplementationOnce(async () => {
            return new Promise((resolve, reject) => reject(new Error()))
        })
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(undefined)))
    })

    test('should return 403 if AddTeacherAccount returns null', async () => {
        const { sut, addTeacherAccountStub } = makeSut()
        jest.spyOn(addTeacherAccountStub, 'addTeacher').mockReturnValueOnce(new Promise(resolve => resolve(null)))
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
    })

    test('should call Validation with correct values', () => {
        const { sut, validationStub } = makeSut()
        const validateSpy = jest.spyOn(validationStub, 'validate')
        const httpRequest = makeFakeRequest()
        sut.handle(httpRequest)
        expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    })

    test('should return 400 if Validation returns an error', async () => {
        const { sut, validationStub } = makeSut()
        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
    })
})