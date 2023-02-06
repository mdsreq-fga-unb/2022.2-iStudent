import { Teacher } from '../../../types/user';
import { api } from '../api/api';

export default async function getAllTeachers() {
  try {
    const { data } = await api.get('teachers');
    const teachers = data.teachers as Teacher[];
    return teachers;
  } catch (error) {
    throw new Error('Erro ao pegar professores, tente novamente!');
  }
}
