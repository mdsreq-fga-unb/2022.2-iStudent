import { LoginController } from '../../controllers/login/teacher/login-controller';
import { Controller } from '../../controllers/protocols';
import { PrismaUserRepository } from '../../infra/database/prisma/repositories/user-repository';

export const makeLoginController = (): Controller => {
  const controller = new LoginController(
    new PrismaUserRepository(),
  );
  return controller;
};
