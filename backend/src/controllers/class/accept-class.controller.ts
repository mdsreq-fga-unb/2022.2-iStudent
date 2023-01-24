import { ClassesRepository } from '../../database/repositories/classes-repository';
import { ok, serverError } from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AcceptClassController implements Controller {
  constructor(private readonly classes_repository: ClassesRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, accepted } = httpRequest.body;
      await this.classes_repository.acceptOrDenyByTeacherId(id, accepted);

      return ok({ message: 'Updated class!' });
    } catch (error) {
      return serverError(error);
    }
  }
}
