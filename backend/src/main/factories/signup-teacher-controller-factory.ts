import { Controller } from "../../controllers/protocols";
import { SignUpTeacherController } from "../../controllers/signup/teacher/signup-teacher-controller";
import { makeSignUpTeacherValidation } from "./signup-teacher-validation-factory";

export const makeSignUpTeacherController = (): Controller => {
    const controller = new SignUpTeacherController(makeSignUpTeacherValidation())
    return controller
}