import { UnenrollRegistrationController } from '../../../controllers/courseManagement/unenrollRegistration/unenroll-registration-controller';
import { Controller } from '../../../controllers/protocols';
import { makePrismaUnenrollRegistration } from '../useCases/unenroll-registratio-factory';

const makeUnenrollRegistration = (): Controller => {
  const controller = new UnenrollRegistrationController(
    makePrismaUnenrollRegistration(),
  );
  return controller;
};
