export interface UnenrollRegistrationModel {
  unenroll(id: number): Promise<void>;
}
