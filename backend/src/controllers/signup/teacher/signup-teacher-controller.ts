import { MissingParamError } from "../../errors/missign-param-errors";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class SignUpTeacherController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const requiredField = [
            'name',
            'email',
            'password',
            'confirmationPassword',
            'photo_url',
            'whatsapp',
            'biography',
            'materials',
            'costPerHour',
            'disponibility'
        ]
        for (const field of requiredField) {
            if (!httpRequest.body[field]) {
                return {
                    statusCode: 400,
                    body: new MissingParamError(field)
                }
            }
        }

        return {
            statusCode: 200,
            body: {
                message: 'ok'
            }
        }
    }
}