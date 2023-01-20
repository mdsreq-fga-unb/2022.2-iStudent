import { EditCourse, EditCourseModel, NewCourseModel } from "../../../../domain/useCases/editCourse/editCourse";
import { EditCourseRepository } from "../../../repositories/editCourseRepository/edit-course-repository";

export class EditCourseUseCaseRepository implements EditCourse {
    constructor(
        private readonly _editCourseRepository: EditCourseRepository
    ) {}
    
    async editCourse(id: number, course: EditCourseModel): Promise<NewCourseModel> {
        const newCourse = await this._editCourseRepository.editCourse(id, course);
        if (!newCourse) throw new Error('Erro ao editar o curso');
        return newCourse;
    }
}