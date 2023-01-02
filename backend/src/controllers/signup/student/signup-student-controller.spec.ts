import { AccountStudentModel } from "../../../domain/models/account"
import { AddStudentAccount, addStudentAccountModel } from "../../../domain/useCases/addStudentAccount"
import { MissingParamError, ServerError } from "../../errors"
import { badRequest, serverError } from "../../helpers/http/http-helper"
import { HttpRequest } from "../../protocols"
import { Validation } from "../../protocols/validation"
import { SignUpStudentController } from "./signup-student-controller"

interface SutTypes {
    sut: SignUpStudentController
    addStudentAccountStub: AddStudentAccount
    validationStub: Validation
}

const makeAddAccount = (): AddStudentAccount => {
    class AddStudentAccountStub implements AddStudentAccount {
        async addStudent(account: addStudentAccountModel): Promise<AccountStudentModel> {
            return new Promise(resolve => resolve(makeFakeAccount()))
        }
    }
    return new AddStudentAccountStub()
}

const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
        validate(input: any): Error {
            return null
        }
    }
    return new ValidationStub()
}

const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
        whatsapp: 'any_whatsapp',
        biography: 'any_biography'
    }
})

const makeFakeAccount = (): AccountStudentModel => ({
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_email',
    password: 'valid_password',
    whatsapp: 'valid_whatsapp',
    biography: 'valid_biography'
})

const makeSut = (): SutTypes => {
    const validationStub = makeValidation()
    const addStudentAccountStub = makeAddAccount()
    const sut = new SignUpStudentController(addStudentAccountStub, validationStub)
    return {
        sut,
        addStudentAccountStub,
        validationStub
    }
}

describe('SignUpStudentController', () => {
    test('Should return 200', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse.statusCode).toBe(200)
    })

    test('Should call AddStudentAccount with correct values', () => {
        const { sut, addStudentAccountStub } = makeSut()
        const addStudentSpy = jest.spyOn(addStudentAccountStub, 'addStudent')
        sut.handle(makeFakeRequest())
        expect(addStudentSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_email@email.com',
            password: 'any_password',
            whatsapp: 'any_whatsapp',
            biography: 'any_biography'    
        })
    })

    test('Should return 500 if AddStudentAccount throws', async () => {
        const { sut, addStudentAccountStub } = makeSut()
        jest.spyOn(addStudentAccountStub, 'addStudent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })

    test('Should call Validation with correct values', () => {
        const { sut, validationStub } = makeSut()
        const validateSpy = jest.spyOn(validationStub, 'validate')
        const httpRequest = makeFakeRequest()
        sut.handle(httpRequest)
        expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    })

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationStub } = makeSut()
        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
    })
})