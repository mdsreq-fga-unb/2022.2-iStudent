import { UnenrollRegistrationModel } from '../../../domain/useCases/userManagement/unerollRegistration';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class UnenrollRegistrationController implements Controller {
  constructor(
    private readonly _unenrollRegistration: UnenrollRegistrationModel,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.user;

      await this._unenrollRegistration.unenroll(id);
      return ok({ message: 'Matrícula cancelada com sucesso' });
    } catch (error) {
      serverError(error);
    }
  }
}
