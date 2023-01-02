import { InvalidParamError } from "../../controllers/errors/invalid-params.error";
import { Validation } from "../../controllers/protocols/validation";

export class CompareFieldsValidation implements Validation {
    constructor(
        private readonly _fieldName: string,
        private readonly _fieldToCompare: string
    ) {}
    
    validate(input: any): Error {
        if (input[this._fieldName] !== input[this._fieldToCompare]) {
            return new InvalidParamError(this._fieldToCompare)
        }
    }
    
}