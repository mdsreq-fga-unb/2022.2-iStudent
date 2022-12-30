import { CreateStudentUseCaseRepository } from "../../../../database/useCases/create-student.use-case";
import { AddStudentAccount } from "../../../../domain/useCases/addStudentAccount";
import { StudentAccountPrismaRepository } from "../../../../infra/database/prisma/repositories/student-account-repository";

export const makeSignUpStudentAccount = (): AddStudentAccount => {
    const addStudentAccountPrismaRepository = new StudentAccountPrismaRepository
    return new CreateStudentUseCaseRepository(addStudentAccountPrismaRepository)
}