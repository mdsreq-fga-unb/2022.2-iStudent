import { AddClassRequestRepository } from "../../../../database/repositories/add-class-request-repository";
import { AddClassRequestModel } from "../../../../domain/useCases/class/addClassRequest";
import prisma from '../../../../database'

export class ClassRequestPrismaRepository implements AddClassRequestRepository {
    async add(request: AddClassRequestModel): Promise<void> {
        await prisma.class.create({
            data: {
                id: request.id,
                type: request.type,
                days: request.days,
                startHour: request.startHour
            }
        })
    }
}