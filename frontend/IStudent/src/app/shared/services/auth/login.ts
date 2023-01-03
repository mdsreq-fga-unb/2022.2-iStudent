import { api } from "../api/api"

export default async function login(email: string, password: string) {
    try {
        const { data } = await api.post('login', { email, password });
        const token = data.token as string
        if (!token) return alert('Erro no login, tente novamente!')
        localStorage.setItem('ISTUDENT:TOKEN', token)
        return token
    } catch (error) {
        alert('Erro no login, tente novamente!')
    }
}