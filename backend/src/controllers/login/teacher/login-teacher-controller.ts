import { TeacherRepository } from '../../../database/repositories/users';
import { sign } from '../../../infra/auth/jwt';
import {
  badRequest,
  ok,
  serverError,
} from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class LoginTeacherController implements Controller {
  constructor(
    private readonly teacherRepository: TeacherRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        email,
        password
      } = httpRequest.body;

      const teacher = await this.teacherRepository.findOne(email);

      if(!teacher) return badRequest('Teacher not found');

      if(teacher.password !== password) return badRequest('Wrong password');

      const token = sign(teacher)

      return ok({ token });
    } catch (error) {
      return serverError(error);
    }
  }
}
