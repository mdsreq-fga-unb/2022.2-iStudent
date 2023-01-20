import { EditCourse } from "../../../domain/useCases/editCourse/editCourse";
import { badRequest, ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { Validation } from "../../protocols/validation";

export class EditCourseController implements Controller {
    constructor(
        private readonly _editCourse: EditCourse,
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(httpRequest.body);
            if (error) {
                return badRequest(error);
            }

            const {
                id,
                description,
                price,
                contents,
                courseRating,
                teacherId,
                teacherName,
                teacherTotalStudents,
                teacherTotalHours
            } = httpRequest.body;

            const newCourse = await this._editCourse.editCourse(id, {
                id,
                description,
                price,
                contents,
                courseRating,
                teacherId,
                teacherName,
                teacherTotalStudents,
                teacherTotalHours,
            })

            return ok({ newCourse})
        } catch (error) {
            serverError(error)
        }
    }
}