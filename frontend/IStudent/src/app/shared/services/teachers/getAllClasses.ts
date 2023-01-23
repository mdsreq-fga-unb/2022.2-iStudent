import { Aula } from '../../components';
import { api } from '../api/api';

export interface IAula extends Aula {
  id: number;
  student: {
    name: string;
  };
  accepted: boolean | null;
}

export default async function getAllClassseByTeacher() {
  try {
    const { data } = await api.get('teacher/classes');
    const classes = data.classes as IAula[];
    return classes;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao pegar aulas, tente novamente!');
  }
}
