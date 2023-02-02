import { CourseRegistration } from "../../../domain/useCases/userManagement/courseRegistration";
import { ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class RegistrationCourseController implements Controller {
    constructor(private readonly _courseRegistration: CourseRegistration) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.user
            const { courseId, status } = httpRequest.body;
            const registeredCourse = await this._courseRegistration.registerInCourse({
                courseId,
                userId: id,
                status
            })
            return ok(registeredCourse);

        } catch (error) {
            serverError(error);
        }
    }
}