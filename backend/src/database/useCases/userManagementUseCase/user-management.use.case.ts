import { CourseRegistrationModel } from "../../../domain/models/courseRegistration";
import { AddCourseRegistrationModel, CourseRegistration } from "../../../domain/useCases/userManagement/courseRegistration";
import { UserManagementRepository } from "../../repositories/userManagement/user-management-repository";

export class UserManagementUseCase implements CourseRegistration {
    constructor(private readonly _userManagementRepository: UserManagementRepository) {}
    
    async registerInCourse(data: AddCourseRegistrationModel): Promise<CourseRegistrationModel> {
        const courseRegistration = await this._userManagementRepository.registerInCourse(data);
        if (!courseRegistration) {
            throw new Error('Erro ao tentar se matricular no curso');
        }

        return courseRegistration;
    }
}