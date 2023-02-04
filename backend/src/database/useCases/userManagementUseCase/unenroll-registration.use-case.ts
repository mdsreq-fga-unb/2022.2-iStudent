import { UnenrollRegistrationModel } from '../../../domain/useCases/userManagement/unerollRegistration';
import { UnenrollRegistrationRepository } from '../../repositories/userManagement/unemroll-registration-repository';

export class UnenrollRegistration implements UnenrollRegistrationModel {
  constructor(
    private readonly _unenrollRegistrationRepository: UnenrollRegistrationRepository,
  ) {}

  async isEnrolled(userId: number, courseId: number): Promise<boolean> {
    return await this._unenrollRegistrationRepository.isEnrolled(
      userId,
      courseId,
    );
  }

  async unenroll(userId: number, courseId: number): Promise<void> {
    const isEnrolled = await this._unenrollRegistrationRepository.isEnrolled(
      userId,
      courseId,
    );

    if (!isEnrolled) {
      throw new Error('Usuário não está matriculado no curso');
    }

    await this._unenrollRegistrationRepository.unenroll(userId, courseId);
  }
}
