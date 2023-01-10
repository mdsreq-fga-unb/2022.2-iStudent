import { Controller } from '../../../controllers/protocols';
import { AllTeachersController } from '../../../controllers/teachers/all-teachers-controller';
import { PrismaUserRepository } from '../../../infra/database/prisma/repositories/user-repository';

export const makeAllTeachersController = (): Controller => {
  const controller = new AllTeachersController(
    new PrismaUserRepository()
  );
  return controller;
};
