import { NewAccountStudentModel } from "../../models/newAccount"

export interface editStudentAccountModel {
    name: string
    email: string
    password: string
    whatsapp: string
    biography: string
}

export interface EditStudentAccount {
    editStudent (account: editStudentAccountModel): Promise<NewAccountStudentModel>
}