import { MissingParamError } from '../../controllers/errors/missign-param-errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
    test('Should return a MissingParamError if validation fails', () => {
        const sut = new RequiredFieldValidation('field')
        const error = sut.validate({ name: 'any_name' })
        expect(error).toEqual(new MissingParamError('field'))
    })

    test('Should no return if validation succeeds', () => {
        const sut = new RequiredFieldValidation('field')
        const error = sut.validate({ field: 'any_field' })
        expect(error).toBeFalsy()
    })
})