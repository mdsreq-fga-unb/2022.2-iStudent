import { UserRepository } from '../../../database/repositories/users';
import { sign } from '../../../infra/auth/jwt';
import {
  badRequest,
  ok,
  serverError,
} from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class LoginController implements Controller {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        email,
        password
      } = httpRequest.body;

      const user = await this.userRepository.findOne(email);

      if(!user) return badRequest('User not found');

      if(user.password !== password) return badRequest('Wrong password');
      delete user.password;
      const token = sign(user)

      return ok({ token });
    } catch (error) {
      return serverError(error);
    }
  }
}
