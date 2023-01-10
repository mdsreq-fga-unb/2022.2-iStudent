import { UserRepository } from '../../database/repositories/users';
import { ok, serverError } from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AllTeachersController implements Controller {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const teachers = await this.userRepository.AllTeachers();

      return ok({ teachers });
    } catch (error) {
      return serverError(error);
    }
  }
}
