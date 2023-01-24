import { Aula } from '../../components';
import { api } from '../api/api';

export interface IAulaNotification extends Aula {
  id: number;
  student: {
    name: string;
  };
  accepted: boolean | null;
  teacher: {
    name: string;
    subject: {
      name: string;
    };
  };
}

export default async function getNotifications() {
  try {
    const { data } = await api.get('class/notifications');
    const classes = data.classes as IAulaNotification[];
    return classes;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao pegar notificaticoes, tente novamente!');
  }
}
