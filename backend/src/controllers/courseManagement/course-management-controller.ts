import { AddCourse } from "../../domain/useCases/courseManagement/addCourse";
import { ok, serverError } from "../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class CourseManagementController implements Controller {
    constructor(
        private readonly _addCourse: AddCourse
    ) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
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