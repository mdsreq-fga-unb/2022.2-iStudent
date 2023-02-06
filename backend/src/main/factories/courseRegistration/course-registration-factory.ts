import { RegistrationCourseController } from '../../../controllers/courseManagement/registrationCourse/registration-course-controller';
import { Controller } from '../../../controllers/protocols';
import { makePrismaRegistrationCourse } from '../useCases/register-course-factory';

export const makeCourseRegistrationController = (): Controller => {
  const controller = new RegistrationCourseController(
    makePrismaRegistrationCourse(),
  );

  return controller;
};
