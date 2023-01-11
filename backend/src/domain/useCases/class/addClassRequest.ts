export interface AddClassRequestModel {
    type: 'REMOTA' | 'PRESENCIAL';
    days: string[];
    startHour: string;
}

export interface AddClassRequest {
    addClassRequest(request: AddClassRequestModel): Promise<void>;
}