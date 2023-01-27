import { Validation } from "../../controllers/protocols/validation";

export class RequiredPriceNumberValidation implements Validation {
    constructor(
        private readonly _fieldName: number
    ) {}
    
    validate(input: any): Error {
        if(!input[this._fieldName]) {
            return new Error('Price is required')
        }
    }
}