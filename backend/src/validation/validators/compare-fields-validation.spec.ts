import { InvalidParamError } from "../../controllers/errors/invalid-params.error"
import { CompareFieldsValidation } from './compare-fields-validation'

describe('CompareFields Validation', () => {
    test('Should return a InvalidParamError if validation fails', () => {
        const sut = new CompareFieldsValidation('field', 'fieldToCompare')
        const error = sut.validate({ field: 'any_field', fieldToCompare: 'wrong_field' })
        expect(error).toEqual(new InvalidParamError('fieldToCompare'))
    })

    test('Should no return if validation succeeds', () => {
        const sut = new CompareFieldsValidation('field', 'fieldToCompare')
        const error = sut.validate({ field: 'any_field', fieldToCompare: 'any_field' })
        expect(error).toBeFalsy()
    })
})