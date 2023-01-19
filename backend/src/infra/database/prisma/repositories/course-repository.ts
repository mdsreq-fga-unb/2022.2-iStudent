import { AddCourseRepository } from "../../../../database/repositories/add-course-repository";
import { CourseModel } from "../../../../domain/models/course";
import { AddCourseModel } from "../../../../domain/useCases/courseManagement/addCourse";
import prisma from "../../../../database";

export class CoursePrismaRepository implements AddCourseRepository {
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
}