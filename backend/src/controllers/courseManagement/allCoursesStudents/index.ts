import prisma from '../../../database';
import { ok, serverError } from '../../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class AllStudentCoursesController implements Controller {
  constructor() {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.user;
      const courses = await prisma.register.findMany({
        where: {
          userId: id,
        },
        include: {
          course: {
            include: {
              teacher: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      return ok({ courses });
    } catch (error) {
      serverError(error);
    }
  }
}
