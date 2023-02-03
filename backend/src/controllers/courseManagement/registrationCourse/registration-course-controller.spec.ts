import { CourseRegistration, AddCourseRegistrationModel } from '../../../domain/useCases/userManagement/courseRegistration'
import { CourseRegistrationModel } from '../../../domain/models/courseRegistration'
import { RegistrationCourseController } from "./registration-course-controller"
import { HttpRequest } from '../../protocols'

type SutTypes = {
    sut: RegistrationCourseController
    addRegistrationCourseStub: CourseRegistration
}

const makeFakeRegistrationCourse = (): CourseRegistrationModel => ({
    id: 1,
    courseId: 1,
    userId: 1,
    status: 'NAO_MATRICULADO'
})

const makeFakeRequestRegistrationCourse = (): HttpRequest => ({
    body: {
        courseId: 1,
        userId: 1,
        status: 'NAO_MATRICULADO'
    }
})

const makeAddRegistrationCourse = (): CourseRegistration => {
    class AddRegistrationCourseStub implements CourseRegistration {
        async registerInCourse(data: AddCourseRegistrationModel): Promise<CourseRegistrationModel> {
            return new Promise(resolve => resolve(makeFakeRegistrationCourse()))
        }
    }
    return new AddRegistrationCourseStub();
}

const makeSut = (): SutTypes => {
    const addRegistrationCourseStub = makeAddRegistrationCourse()
    const sut = new RegistrationCourseController(addRegistrationCourseStub)
    return {
        sut,
        addRegistrationCourseStub,
    }
}

describe("RegistrationCourseController", () => {
    test('should return 200 when user is registered in course', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(makeFakeRequestRegistrationCourse())
        expect(httpResponse.statusCode).toBe(200)
    })
})