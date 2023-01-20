import { GetCourse } from "../../../domain/useCases/getCourse/getCourse";
import { badRequest, ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { Validation } from "../../protocols/validation";

export class GetCourseController implements Controller {
    constructor(
        private readonly _getCourse: GetCourse,
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = await this._validation.validate(httpRequest.body);
            if (error) {
                return badRequest(error);
            }

            const { name } = httpRequest.body;
            
            const course = await this._getCourse.get(name);
            
            return ok({ course });

        } catch (error) {
            serverError(error);
        }
    }
}