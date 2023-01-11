import { api } from '../api/api';

export default async function saveSubject(
  subjectName: string,
  subjectId: number,
) {
  try {
    await api.post('teachers/subject', {
      name: subjectName,
    });
  } catch (error) {
    alert('Erro ao salvar maeteria, tente novamente!');
  }
}
