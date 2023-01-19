import { AddCourse } from "../../domain/useCases/courseManagement/addCourse";
import { badRequest, ok, serverError } from "../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { Validation } from "../protocols/validation";

export class CourseManagementController implements Controller {
    constructor(
        private readonly _addCourse: AddCourse,
        private readonly _validation: Validation
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(httpRequest.body);
            if (error) {
                return badRequest(error);
            }

            const { 
                name, 
                description, 
                price, 
                contents, 
                courseRating, 
                teacherId, 
                teacherName, 
                teacherTotalStudents, 
                teacherTotalHours } = httpRequest.body;
            
            const course = await this._addCourse.addCourse(
                { 
                    name, 
                    description, 
                    price, 
                    contents, 
                    courseRating, 
                    teacherId, 
                    teacherName, 
                    teacherTotalStudents, 
                    teacherTotalHours 
                }
            );
            
            return ok({ course });
        } catch (error) {
            serverError(error);
        }
    }
}