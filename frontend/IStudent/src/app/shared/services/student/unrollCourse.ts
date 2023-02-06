import { api } from '../api/api';

export default async function unrollCourse(id: number) {
  try {
    await api.delete('/course', { data: { id } });
  } catch (error) {
    alert('Erro ao cancelar matrícula, tente novamente!');
  }
}
