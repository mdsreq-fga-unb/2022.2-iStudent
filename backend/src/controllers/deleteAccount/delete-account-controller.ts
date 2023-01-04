import { UserRepository } from '../../database/repositories/users';
import {
  badRequest,
  ok,
  serverError,
} from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class DeleteAccountController implements Controller {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.user

      await this.userRepository.deleteOne(id);

      return ok({ message: 'Deleted user.' });
    } catch (error) {
      return serverError(error);
    }
  }
}
