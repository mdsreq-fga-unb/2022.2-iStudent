export interface UnenrollRegistrationRepository {
  unenroll(id: number): Promise<void>;
}
