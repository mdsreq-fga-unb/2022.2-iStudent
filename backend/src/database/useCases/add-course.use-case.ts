import { CourseModel } from "../../domain/models/course";
import { AddCourse, AddCourseModel } from "../../domain/useCases/courseManagement/addCourse";
import { AddCourseRepository } from "../repositories/add-course-repository";

export class AddCourseUseCaseRepository implements AddCourse {
    constructor(
        private readonly _addCourseRepository: AddCourseRepository
    ) {}
    
    async addCourse(course: AddCourseModel): Promise<CourseModel> {
        const courseAdded = await this._addCourseRepository.addCourse(course);
        if (!courseAdded) {
            throw new Error('Erro ao criar o curso');
        }

        return courseAdded;
    }
}