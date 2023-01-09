import { EditAccountController } from "../../../controllers/editAccount/editAccount-controller";
import { Controller } from "../../../controllers/protocols";
import { PrismaUserRepository } from "../../../infra/database/prisma/repositories/user-repository";

export const makeEditAccountController = (): Controller => {
    const controller = new EditAccountController(
        new PrismaUserRepository()
    );
    return controller;
}