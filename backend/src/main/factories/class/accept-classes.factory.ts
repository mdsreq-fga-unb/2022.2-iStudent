import { AcceptClassController } from '../../../controllers/class/accept-class.controller';
import { Controller } from '../../../controllers/protocols';
import { ClassesPrismaRepository } from '../../../infra/database/prisma/repositories/class-repository';

export const makeAcceptClassController = (): Controller => {
  const controller = new AcceptClassController(new ClassesPrismaRepository());
  return controller;
};
