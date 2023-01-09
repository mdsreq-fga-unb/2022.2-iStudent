import { UserRepository } from "../../database/repositories/users";
import { badRequest, ok } from "../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class EditAccountController implements Controller {
    constructor(
        private readonly _userRepository: UserRepository
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const findAccount = this._userRepository.findOne(httpRequest.body.email);

        if (findAccount) {
            const updateAccount = this._userRepository.updateOne(httpRequest.body.id, httpRequest.body);
            return ok(updateAccount)
        }

        return badRequest(new Error('Account not found'));
    }
}