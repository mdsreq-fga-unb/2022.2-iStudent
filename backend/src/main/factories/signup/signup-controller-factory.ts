import { Controller } from '../../../controllers/protocols';
import { SignUpController } from '../../../controllers/signup/signup-controller';
import { PrismaUserRepository } from '../../../infra/database/prisma/repositories/user-repository';
import { makeSignUpValidation } from './signup-validation-factory';

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(
    new PrismaUserRepository(),
    makeSignUpValidation(),
  );
  return controller;
};
