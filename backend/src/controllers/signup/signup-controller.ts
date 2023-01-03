import { UserRepository } from '../../database/repositories/users';
import {
  badRequest,
  ok,
  serverError,
} from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';
import { Validation } from '../protocols/validation';

export class SignUpController implements Controller {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly _validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this._validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      const {
        name,
        email,
        password,
        whatsapp,
        biography,
        role
      } = httpRequest.body;

      if(role === 'TEACHER') {
        await this.userRepository.addTeacher({
          name,
          email,
          password,
          whatsapp,
          biography,
        });
      }
      if (role === 'STUDENT'){
        await this.userRepository.addStudent({
          name,
          email,
          password,
          whatsapp,
          biography,
        });
      }

      return ok({ message: 'User created!' });
    } catch (error) {
      return serverError(error);
    }
  }
}
