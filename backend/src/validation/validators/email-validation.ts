import { InvalidParamError } from "../../controllers/errors/invalid-params.error";
import { Validation } from "../../controllers/protocols/validation";
import { EmailValidator } from "../protocols/emailValidator";

export class EmailValidation implements Validation {
    constructor(
        private readonly _fieldName: string,
        private readonly _emailValidator: EmailValidator
    ) {}
    
    validate(input: any): Error {
        const isValid = this._emailValidator.isValid(input[this._fieldName])
        if (!isValid) {
            return new InvalidParamError(this._fieldName)
        }
    }
}