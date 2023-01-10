import { MeController } from '../../../controllers/me/me-controller';
import { Controller } from '../../../controllers/protocols';
import { PrismaUserRepository } from '../../../infra/database/prisma/repositories/user-repository';

export const makeMeController = (): Controller => {
  const controller = new MeController(new PrismaUserRepository());
  return controller;
};
