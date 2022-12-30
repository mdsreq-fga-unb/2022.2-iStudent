import { Validation } from "../../../controllers/protocols/validation"
import { EmailValidator } from "../../../validation/protocols/emailValidator"
import { CompareFieldsValidation, EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../../validation/validators"
import { makeSignUpTeacherValidation } from "./signup-teacher-validation-factory"

jest.mock('../../../validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
    class EmailValidatorStub implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }
    return new EmailValidatorStub()
}

describe('SignUpTeacherValidation Factory', () => {
    test('Should call ValidationComposite with all validations', () => {
        makeSignUpTeacherValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'confirmationPassword', 'photo_url', 'whatsapp', 'biography', 'materials', 'costPerHour', 'disponibility']) {
            validations.push(new RequiredFieldValidation(field))
        }
        validations.push(new CompareFieldsValidation('password', 'confirmationPassword'))
        validations.push(new EmailValidation('email', makeEmailValidator()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})