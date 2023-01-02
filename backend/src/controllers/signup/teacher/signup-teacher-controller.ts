import { TeacherRepository } from '../../../database/repositories/users';
import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { Validation } from '../../protocols/validation';

export class SignUpTeacherController implements Controller {
  constructor(
    private readonly teacherRepository: TeacherRepository,
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
      } = httpRequest.body;
      await this.teacherRepository.addTeacher({
        name,
        email,
        password,
        whatsapp,
        biography,
      });

      return ok({ data: 'ok' });
    } catch (error) {
      return serverError(error);
    }
  }
}
