import { Validation } from "../../controllers/protocols/validation";

export class ValidationComposite implements Validation {
    constructor(private readonly _validations: Validation[]) {}
    
    validate(input: any): Error {
        for (const validation of this._validations) {
            const error = validation.validate(input)
            if (error) {
                return error
            }
        }
    }
}