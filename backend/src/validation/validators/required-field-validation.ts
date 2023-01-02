import { MissingParamError } from "../../controllers/errors/missign-param-errors";
import { Validation } from "../../controllers/protocols/validation";

export class RequiredFieldValidation implements Validation {
    constructor(private readonly _fieldName: string) {}
    
    validate(input: any): Error {
        if (!input[this._fieldName]) {
            return new MissingParamError(this._fieldName)
        }
    }
}