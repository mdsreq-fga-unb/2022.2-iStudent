import { api } from "../api/api"

export default async function deleteAccount() {
    try {
        await api.delete('me');
    } catch (error) {
        alert('Erro ao deletar usuario, tente novamente!')
    }
}