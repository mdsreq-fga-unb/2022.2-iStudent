import { AddClassRequest, AddClassRequestModel } from "../../domain/useCases/class/addClassRequest";
import { AddClassRequestRepository } from "../repositories/add-class-request-repository";

export class AddClassRequestUseCaseRepository implements AddClassRequest {
    constructor(
        private readonly _addClassRequestRepository: AddClassRequestRepository
    ) {}
    
    async addClassRequest(request: AddClassRequestModel): Promise<void> {
        await this._addClassRequestRepository.add(request)
    }
}