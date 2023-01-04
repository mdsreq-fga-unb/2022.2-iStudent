import { api } from "../api/api"

export default async function userInfo() {
    try {
        const { data } = await api.get('me');
        const user = data.user
        return user
    } catch (error) {
        throw new Error('Erro ao pegar informações, tente novamente!')
    }
}