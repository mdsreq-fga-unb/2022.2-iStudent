import { UnenrollRegistrationModel } from '../../../domain/useCases/userManagement/unerollRegistration';
import { badRequest, ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class UnenrollRegistrationController implements Controller {
  constructor(
    private readonly _unenrollRegistration: UnenrollRegistrationModel,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { userId, courseId } = httpRequest.body;

      const isEnrolled = await this._unenrollRegistration.isEnrolled(
        userId,
        courseId,
      );

      if (!isEnrolled) {
        return badRequest(new Error('User is not enrolled in this course'));
      } else {
        await this._unenrollRegistration.unenroll(userId, courseId);

        return ok({ message: 'User unenrolled in this course' });
      }
    } catch (error) {
      serverError(error);
    }
  }
}
