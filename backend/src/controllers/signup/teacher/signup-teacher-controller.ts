import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class SignUpTeacherController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        return new Promise(resolve => resolve({
            statusCode: 200,
            body: {}
        }))
    }
}