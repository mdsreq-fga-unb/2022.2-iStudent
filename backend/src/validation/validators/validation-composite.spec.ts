import { MissingParamError } from "../../controllers/errors/missign-param-errors"
import { Validation } from "../../controllers/protocols/validation"
import { ValidationComposite } from "./validation-composite"

interface SutTypes {
    sut: ValidationComposite
    validationStubs: Validation[]
}

const makeValidation = (): Validation => {
    class ValidationCompositeStub implements Validation {
        validate(input: any): Error {
            return null
        }
        
    }
    return new ValidationCompositeStub()
}

const makeSut = (): SutTypes => {
    const validationStubs = [makeValidation(), makeValidation()]
    const sut = new ValidationComposite(validationStubs)
    return {
        sut,
        validationStubs
    }
}

describe('ValidationComposite', () => {
    test('Should return an error if any validation fails', () => {
        const { sut, validationStubs } = makeSut()
        jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
        const error = sut.validate({ field: 'any_field' })
        expect(error).toEqual(new MissingParamError('field'))
    })

    test('Should return the first error if more then one validation fails', () => {
        const { sut, validationStubs } = makeSut()
        jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
        jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))
        const error = sut.validate({ field: 'any_field' })
        expect(error).toEqual(new Error())
    })

    test('Should not return if validation succeeds', () => {
        const { sut } = makeSut()
        const error = sut.validate({ field: 'any_field' })
        expect(error).toBeFalsy()
    })
})