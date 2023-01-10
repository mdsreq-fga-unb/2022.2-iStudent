import { SubjectRepository } from '../../database/repositories/subjects';
import { ok, serverError } from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddSubjectController implements Controller {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name } = httpRequest.body;
      const { id } = httpRequest.user;
      await this.subjectRepository.addSubject({
        name,
        teacherId: id,
      });

      return ok({ message: 'Added subject!' });
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}
