import { Router } from "express";
import { adaptRoute } from "../adapters/express/express-route.adapter";
import { makeSignUpTeacherController } from "../factories/signup-teacher/signup-teacher-controller-factory";

export default (router: Router): void => {
    router.post('/signup/teacher', adaptRoute(makeSignUpTeacherController()))
}