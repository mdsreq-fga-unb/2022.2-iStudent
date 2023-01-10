import { AddClassRequestController } from "../../../controllers/classRequest/add-class-request-controller";
import { Controller } from "../../../controllers/protocols";
import { makePrismaClassRequest } from "../useCases/add-class-request-factory";
import { makeClassRequestValidation } from "./classRequest-validation-factory";

export const makeClassRequestController = (): Controller => {
    const controller = new AddClassRequestController(makePrismaClassRequest() ,makeClassRequestValidation())
    return controller;
}