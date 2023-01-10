import { AddClassRequestModel } from "../../domain/useCases/class/addClassRequest";

export interface AddClassRequestRepository {
    add(request: AddClassRequestModel): Promise<void>;
}