import { CourseModel } from "../../../../domain/models/course";
import { GetCourse } from "../../../../domain/useCases/getCourse/getCourse";
import { GetCourseRepository } from "../../../repositories/getCourseRepository/get-course.repository";

export class GetCourseUseCaseRepository implements GetCourse {
    constructor(
        private readonly _getCourseRepository: GetCourseRepository
    ) {}
    
    async get(name: string): Promise<CourseModel> {
        const course = await this._getCourseRepository.get(name);
        if (!course) throw new Error("Course not found");

        return course;
    }
}