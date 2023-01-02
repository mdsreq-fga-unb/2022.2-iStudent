import { Validation } from "../../../controllers/protocols/validation";
import { EmailValidatorAdapter } from "../../../infra/validators/email-validator-adapter";
import { CompareFieldsValidation, EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../../validation/validators";

export const makeSignUpStudentValidation = (): ValidationComposite => {
    const validation: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation', 'whatsapp', 'biography']) {
        validation.push(new RequiredFieldValidation(field))
    }
    validation.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validation.push(new EmailValidation('email', new EmailValidatorAdapter()))
    return new ValidationComposite(validation)
}