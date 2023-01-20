import { Validation } from "../../../controllers/protocols/validation";
import { RequiredFieldValidation, ValidationComposite } from "../../../validation/validators";

export const makeEditCourseValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ['description', 'price', 'contents', 'courseRating', 'teacherName', 'teacherTotalStudents', 'teacherTotalHours']) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}