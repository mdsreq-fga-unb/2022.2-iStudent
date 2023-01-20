import { DeleteCourseRepository } from "../../../repositories/deleteCourseRepository/delete-course-repository";
import { DeleteCourse } from '../../../../domain/useCases/deleteCourse/deleteCourse'

export class DeleteCourseUseCaseRepository implements DeleteCourse {
    constructor(
        private readonly _deleteCourseRepository: DeleteCourseRepository
    ) {}
     
    async deleteCourse(id: number): Promise<void> {
        await this._deleteCourseRepository.deleteCourse(id);
    }
    
}