import { UserRepository } from '../../database/repositories/users';
import {
  badRequest,
  ok,
  serverError,
} from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class MeController implements Controller {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email } = httpRequest.user

      const user = await this.userRepository.findOne(email);

      if(!user) return badRequest('User not found');

      return ok({ user });
    } catch (error) {
      return serverError(error);
    }
  }
}
