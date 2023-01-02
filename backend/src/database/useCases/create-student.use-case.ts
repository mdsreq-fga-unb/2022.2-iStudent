import { AccountStudentModel } from "../../domain/models/account";
import { AddStudentAccount, addStudentAccountModel } from "../../domain/useCases/addStudentAccount";
import { AddStudentRepository } from "../repositories/student-repository";

export class CreateStudentUseCaseRepository implements AddStudentAccount {
    constructor(
        private readonly _addStudentAccountRepository: AddStudentRepository
    ) {}
    
    async addStudent(account: addStudentAccountModel): Promise<AccountStudentModel> {
        const studentAccount = await this._addStudentAccountRepository.addStudent(account)
        if (!studentAccount) {
            throw new Error('Error on create student account')
        }
        
        return studentAccount
    }
}