import { AddCourse } from '../../../domain/useCases/courseManagement/addCourse';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';
import { Validation } from '../../protocols/validation';

export class CourseManagementController implements Controller {
  constructor(
    private readonly _addCourse: AddCourse,
    private readonly _validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this._validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      const { id } = httpRequest.user;

      const { name, description, price, contents, totalHours } =
        httpRequest.body;

      const course = await this._addCourse.addCourse({
        name,
        description,
        price,
        contents,
        teacherId: id,
        totalHours,
      });

      return ok({ course });
    } catch (error) {
      serverError(error);
    }
  }
}
