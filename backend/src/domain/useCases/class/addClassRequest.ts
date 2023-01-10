export interface AddClassRequestModel {
    type: 'Remota' | 'Presencial';
    days: string[];
    startHour: string;
}

export interface AddClassRequest {
    addClassRequest(request: AddClassRequestModel): Promise<void>;
}