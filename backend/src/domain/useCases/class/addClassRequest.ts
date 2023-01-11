export interface AddClassRequestModel {
  type: 'REMOTA' | 'PRESENCIAL';
  days: string[];
  startHour: string;
  studentId: number;
  teacherId: number;
}

export interface AddClassRequest {
  addClassRequest(request: AddClassRequestModel): Promise<void>;
}
