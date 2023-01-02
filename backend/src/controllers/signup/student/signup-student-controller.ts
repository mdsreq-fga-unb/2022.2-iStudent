import { AddStudentAccount } from "../../../domain/useCases/addStudentAccount";
import { badRequest, ok, serverError } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { Validation } from "../../protocols/validation";

export class SignUpStudentController implements Controller {
    constructor(
        private readonly _addStudentAccount: AddStudentAccount,
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }

            const { name, email, password, whatsapp, biography } = httpRequest.body
            const account = await this._addStudentAccount.addStudent({
                name,
                email,
                password,
                whatsapp,
                biography
            })

            return ok({ account })
        } catch (error) {
            return serverError(error)
        }
    }
}