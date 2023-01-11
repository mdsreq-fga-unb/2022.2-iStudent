import { AddClassRequest } from '../../domain/useCases/class/addClassRequest';
import {
  badRequest,
  noContent,
  serverError,
} from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';
import { Validation } from '../protocols/validation';

export class AddClassRequestController implements Controller {
  constructor(
    private readonly _addClassRequest: AddClassRequest,
    private readonly _validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this._validation.validate(httpRequest.body);
      if (error) {
        return Promise.resolve(badRequest(error));
      }

      const { id: studentId } = httpRequest.user;

      const { type, days, startHour, teacherId } = httpRequest.body;
      await this._addClassRequest.addClassRequest({
        type,
        days,
        startHour,
        teacherId,
        studentId,
      });

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
