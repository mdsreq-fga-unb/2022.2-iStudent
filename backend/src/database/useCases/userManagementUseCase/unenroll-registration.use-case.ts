import { UnenrollRegistrationModel } from '../../../domain/useCases/userManagement/unerollRegistration';
import { UnenrollRegistrationRepository } from '../../repositories/userManagement/unemroll-registration-repository';

export class UnenrollRegistration implements UnenrollRegistrationModel {
  constructor(
    private readonly _unenrollRegistrationRepository: UnenrollRegistrationRepository,
  ) {}
  async unenroll(id: number): Promise<void> {
    return await this._unenrollRegistrationRepository.unenroll(id);
  }
}
