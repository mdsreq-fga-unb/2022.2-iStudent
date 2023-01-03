import { UserRole } from "../../../types/user";
import { api } from "../api/api"

export default async function signUp(info: any, role: UserRole) {
    try {
        await api.post("signup", {
            ...info,
            role
          })
    } catch (error) {
        alert('Erro no cadastro, tente novamente!')
    }
}

export async function signupTeacher (info: any){
    await signUp(info, 'TEACHER')
}

export async function signupStudent (info: any){
    await signUp(info, 'STUDENT')
}