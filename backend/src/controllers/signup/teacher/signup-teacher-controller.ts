import { AddTeacherAccount } from "../../../domain/useCases/addTeacherAccount";
import { EmailInUseError } from "../../errors";
import { badRequest, forbidden, ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { Validation } from "../../protocols/validation";

export class SignUpTeacherController implements Controller {
    constructor(
        private readonly _addTeacherAccount: AddTeacherAccount,
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { 
                name,
                email,
                password,
                photo_url,
                whatsapp,
                biography,
                materials,
                costPerHour,
                disponibility
            } = httpRequest.body
            const account = await this._addTeacherAccount.addTeacher({
                name,
                email,
                password,
                photo_url,
                whatsapp,
                biography,
                materials,
                costPerHour,
                disponibility
            })

            if (!account) return forbidden(new EmailInUseError())

            return ok({ data: 'ok' })
        } catch (error) {
            return serverError(error)
        }
    }
}