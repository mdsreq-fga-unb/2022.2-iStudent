import { AddStudentRepository } from "../../../../database/repositories/student-repository";
import { AccountStudentModel } from "../../../../domain/models/account";
import { addStudentAccountModel } from "../../../../domain/useCases/addStudentAccount";
import { prisma } from "@prisma/client";

export class StudentAccountPrismaRepository implements AddStudentRepository {
    async addStudent(account: addStudentAccountModel): Promise<AccountStudentModel> {
        // await prisma.student.create({
        //     data: {
        //         name: account.name,
        //         email: account.email,
        //         password: account.password,
        //         whatsapp: account.whatsapp,
        //         biography: account.biography
        //     }
        // })

        return
    }
}