import { Aula } from '../../components';
import { api } from '../api/api';

export default async function requestClass(aula: Aula) {
  try {
    await api.post('class', aula);
  } catch (error) {
    alert('Erro ao requisitar aula, tente novamente!');
  }
}
