import { AddCourseRepository } from "../../../../database/repositories/addCourseRepository/add-course-repository";
import { CourseModel } from "../../../../domain/models/course";
import { AddCourseModel } from "../../../../domain/useCases/courseManagement/addCourse";
import prisma from "../../../../database";
import { EditCourseRepository } from "../../../../database/repositories/editCourseRepository/edit-course-repository";
import { EditCourseModel, NewCourseModel } from "../../../../domain/useCases/editCourse/editCourse";
import { DeleteCourseRepository } from "../../../../database/repositories/deleteCourseRepository/delete-course-repository";
import { GetCourseRepository } from "../../../../database/repositories/getCourseRepository/get-course.repository";

export class CoursePrismaRepository implements AddCourseRepository, EditCourseRepository, DeleteCourseRepository, GetCourseRepository {
    async get(name: string): Promise<CourseModel> {
        const getCourseRepository = await prisma.course.findFirst({
            where: {
                name: name
            }
        });
        
        return getCourseRepository;
    }

    async addCourse(course: AddCourseModel): Promise<CourseModel> {        
        const addCourseRepository = await prisma.course.create({
            data: {
                name: course.name,
                description: course.description,
                price: course.price,
                contents: course.contents,
                courseRating: course.courseRating,
                teacherId: course.teacherId,
                teacherName: course.teacherName,
                teacherTotalStudents: course.teacherTotalStudents,
                teacherTotalHours: course.teacherTotalHours
            }
        });
        
        return addCourseRepository;
    }
    
    async editCourse(id: number, course: EditCourseModel): Promise<NewCourseModel> {
        const editCourseRepository = await prisma.course.update({
            where: {
                id: id
            },
            data: {
                description: course.description,
                price: course.price,
                contents: course.contents,
                courseRating: course.courseRating,
                teacherId: course.teacherId,
                teacherName: course.teacherName,
                teacherTotalStudents: course.teacherTotalStudents,
                teacherTotalHours: course.teacherTotalHours
            }
        });
        
        return editCourseRepository;
    }

    async deleteCourse(id: number): Promise<void> {
        await prisma.course.delete({
            where: {
                id: id
            }
        });
    }
}