export interface UnenrollRegistrationRepository {
  isEnrolled(userId: number, courseId: number): Promise<boolean>;
  unenroll(userId: number, courseId: number): Promise<void>;
}
