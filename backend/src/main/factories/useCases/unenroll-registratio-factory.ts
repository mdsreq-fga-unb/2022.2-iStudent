import { UnenrollRegistration } from '../../../database/useCases/userManagementUseCase/unenroll-registration.use-case';
import { UnenrollRegistrationModel } from '../../../domain/useCases/userManagement/unerollRegistration';
import { PrismaUnenrollRegistration } from '../../../infra/database/prisma/repositories/uneroll-registration-repository';

export const makePrismaUnenrollRegistration = (): UnenrollRegistrationModel => {
  const unenrollRegistrationPrismaRepository = new PrismaUnenrollRegistration();
  return new UnenrollRegistration(unenrollRegistrationPrismaRepository);
};
