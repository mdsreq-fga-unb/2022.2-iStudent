import { DeleteCourse } from "../../../domain/useCases/deleteCourse/deleteCourse";
import { ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class DeleteCourseController implements Controller {
    constructor(
        private readonly _deleteCourse: DeleteCourse
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body;

            await this._deleteCourse.deleteCourse(id);

            return ok({ message: 'Deleted course.' });
        } catch (error) {
            serverError(error);
        }
    }
}