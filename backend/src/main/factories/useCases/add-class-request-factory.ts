import { AddClassRequestUseCaseRepository } from "../../../database/useCases/add-class-request.use-case";
import { AddClassRequest } from "../../../domain/useCases/class/addClassRequest";
import { ClassRequestPrismaRepository } from "../../../infra/database/prisma/repositories/class-request-repository";

export const makePrismaClassRequest = (): AddClassRequest => {
    const classRequestPrismaRepository = new ClassRequestPrismaRepository()
    return new AddClassRequestUseCaseRepository(classRequestPrismaRepository)
}