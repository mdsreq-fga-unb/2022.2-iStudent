import { CourseModel } from "../../../domain/models/course"
import { AddCourse, AddCourseModel } from "../../../domain/useCases/courseManagement/addCourse"
import { HttpRequest } from "../../protocols"
import { Validation } from "../../protocols/validation"
import { CourseManagementController } from "./course-management-controller"

interface SutTypes {
    addCourseStub: AddCourse
    validationStub: Validation
    sut: CourseManagementController
}

const makeFakeCourse = (): CourseModel => ({
    id: 1,
    name: "valid_name",
    description: "valid_description",
    price: 10,
    contents: ["valid_content"],
    teacherId: 1,
    totalStudents: 10,
    totalHours: 30
})

const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: "valid_name",
        description: "valid_description",
        price: 10,
        contents: ["valid_content"],
        totalStudents: 300,
        totalHours: 30
    }
})

const makeValidationStub = (): Validation => {
    class ValidationStub implements Validation {
        validate(input: any): Error {
            return null as unknown as Error
        }
    }
    return new ValidationStub()
}

const makeAddCourseStub = (): AddCourse => {
    class AddCourseStub implements AddCourse {
        addCourse(course: AddCourseModel): Promise<CourseModel> {
            return new Promise(resolve => resolve(makeFakeCourse()))
        }
    }
    return new AddCourseStub()
}

const makeSut = (): SutTypes => {
    const validationStub = makeValidationStub()
    const addCourseStub = makeAddCourseStub() 
    const sut = new CourseManagementController(makeAddCourseStub(), makeValidationStub());
    return {
        sut,
        addCourseStub,
        validationStub
    }
}

describe("CourseManagementController Test", () => {
    test('should return 200', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse.statusCode).toBe(200);
    })

    test('should call Validation with correct values', async () => {
        const { sut, validationStub } = makeSut()
        const addCourseSpy = jest.spyOn(validationStub, 'validate');
        const httpRequest = makeFakeRequest()
        await sut.handle(httpRequest)
        expect(addCourseSpy).toHaveBeenCalledWith(httpRequest.body);
    })
})