import { Validation } from "../../../controllers/protocols/validation";
import { RequiredFieldValidation, ValidationComposite } from "../../../validation/validators";

export const makeGetCourseValidation = (): Validation => {
    const validations: Validation[] = [];
    for (const field of ['name']) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}