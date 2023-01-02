import { AccountTeacherModel } from "../models/account"

export interface addTeacherAccountModel {
    name: string
    email: string
    password: string
    whatsapp: string
    biography: string
}

export interface AddTeacherAccount {
    addTeacher (account: addTeacherAccountModel): Promise<AccountTeacherModel>
}