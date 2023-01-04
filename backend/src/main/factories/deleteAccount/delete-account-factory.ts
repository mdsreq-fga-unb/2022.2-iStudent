import { DeleteAccountController } from '../../../controllers/deleteAccount/delete-account-controller';
import { Controller } from '../../../controllers/protocols';
import { PrismaUserRepository } from '../../../infra/database/prisma/repositories/user-repository';

export const makeDeleteAccountController = (): Controller => {
  const controller = new DeleteAccountController(
    new PrismaUserRepository()
  );
  return controller;
};
