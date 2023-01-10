import { Validation } from "../../../controllers/protocols/validation";
import { RequiredFieldValidation, ValidationComposite } from "../../../validation/validators";

export const makeClassRequestValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['type', 'days', 'startHour']) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}