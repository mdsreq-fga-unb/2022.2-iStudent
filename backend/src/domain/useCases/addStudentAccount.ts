import { AccountStudentModel } from "../models/account"

export interface addStudentAccountModel {
    name: string
    email: string
    password: string
    whatsapp: string
    biography: string
}

export interface AddStudentAccount {
    addStudent (account: addStudentAccountModel): Promise<AccountStudentModel>
}