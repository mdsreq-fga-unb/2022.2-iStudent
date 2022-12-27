import { MissingParamError } from '../../errors/missign-param-errors'
import { badRequest } from '../../helpers/http/http-helper'
import { HttpRequest } from '../../protocols'
import { Validation } from '../../protocols/validation'
import { SignUpTeacherController } from './signup-teacher-controller'

interface SutTypes {
    sut: SignUpTeacherController
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

const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
        validate(input: any): Error {
            return null
        }
    }
    return new ValidationStub()
}

const makeSut = (): SutTypes => {
    const validationStub = makeValidation()
    const sut = new SignUpTeacherController(validationStub)
    return {
        sut,
        validationStub
    }
}

describe('SignUpTeacher Controller', () => {
    test('should return 200', async () => {
        const { sut } = makeSut()
        const httpRequest = makeFakeRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
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