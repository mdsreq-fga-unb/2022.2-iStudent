import { AddClassRequestRepository } from "../../../../database/repositories/add-class-request-repository";
import { AddClassRequestModel } from "../../../../domain/useCases/class/addClassRequest";
import prisma from '../../../../database'

export class ClassRequestPrismaRepository implements AddClassRequestRepository {
    async add(request: AddClassRequestModel): Promise<void> {
        
    }
}