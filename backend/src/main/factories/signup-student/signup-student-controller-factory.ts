import { Controller } from "../../../controllers/protocols";
import { SignUpStudentController } from "../../../controllers/signup/student/signup-student-controller";
import { makeSignUpStudentAccount } from "../useCases/add-student-account/signup-student-factory";
import { makeSignUpStudentValidation } from "./signup-student-validation-factory";

export const makeSignUpStudentController = (): Controller => {
    const controller = new SignUpStudentController(makeSignUpStudentAccount(), makeSignUpStudentValidation())
    return controller
}