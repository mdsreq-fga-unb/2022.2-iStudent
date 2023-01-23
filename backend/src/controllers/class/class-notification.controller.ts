import { ClassesRepository } from '../../database/repositories/classes-repository';
import { ok, serverError } from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ClassNotificationController implements Controller {
  constructor(private readonly classes_repository: ClassesRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.user;
      const classes =
        await this.classes_repository.findAllNotificationsByStudentId(id);

      return ok({ classes });
    } catch (error) {
      return serverError(error);
    }
  }
}
