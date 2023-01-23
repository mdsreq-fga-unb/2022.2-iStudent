import { ClassNotificationController } from '../../../controllers/class/class-notification.controller';
import { Controller } from '../../../controllers/protocols';
import { ClassesPrismaRepository } from '../../../infra/database/prisma/repositories/class-repository';

export const makeClassNotificationController = (): Controller => {
  const controller = new ClassNotificationController(
    new ClassesPrismaRepository(),
  );
  return controller;
};
