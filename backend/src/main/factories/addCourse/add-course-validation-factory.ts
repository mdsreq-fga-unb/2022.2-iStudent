import { Validation } from '../../../controllers/protocols/validation';
import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../validation/validators';

export const makeAddCourseValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of [
    'name',
    'description',
    'price',
    'contents',
    'totalHours',
  ]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};