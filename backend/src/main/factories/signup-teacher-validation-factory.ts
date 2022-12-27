import { Validation } from "../../controllers/protocols/validation";
import { EmailValidatorAdapter } from "../../infra/validators/email-validator-adapter";
import { CompareFieldsValidation, EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../validation/validators";

export const makeSignUpTeacherValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'confirmationPassword', 'photo_url', 'whatsapp', 'biography', 'materials', 'costPerHour', 'disponibility']) {
        validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'confirmationPassword'))
    validations.push(new EmailValidation('email', new EmailValidatorAdapter))
    return new ValidationComposite(validations)
}