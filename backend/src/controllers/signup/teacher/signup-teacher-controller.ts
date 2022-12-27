import { badRequest, ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { Validation } from "../../protocols/validation";

export class SignUpTeacherController implements Controller {
    constructor(
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            return ok({ data: 'ok' })
        } catch (error) {
            return serverError(error)
        }
    }
}