import { Validation } from "../../../controllers/protocols/validation"
import { EmailValidator } from "../../../validation/protocols/emailValidator"
import { CompareFieldsValidation, EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../../validation/validators"
import { makeSignUpStudentValidation } from "./signup-student-validation-factory"

jest.mock('../../../validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
    class EmailValidatorStub implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }
    return new EmailValidatorStub()
}

describe('SignUpStudentValidation Factory', () => {
    test('Should call ValidationComposite with all validations', () => {
        makeSignUpStudentValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'passwordConfirmation', 'whatsapp', 'biography']) {
            validations.push(new RequiredFieldValidation(field))
        }
        validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
        validations.push(new EmailValidation('email', makeEmailValidator()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})