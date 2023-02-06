import prisma from '../../../database';
import { ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class AllCourseController implements Controller {
  constructor() {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.user;
      const { myCourses } = httpRequest.query;

      let query: any = {
        include: {
          teacher: {
            select: {
              name: true,
            },
          },
        },
      };

      if (myCourses === 'true') {
        query = {
          ...query,
          where: {
            teacherId: id,
          },
        };
      }

      const courses = await prisma.course.findMany(query);

      return ok({ courses });
    } catch (error) {
      serverError(error);
    }
  }
}
