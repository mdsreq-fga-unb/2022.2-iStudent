import { api } from '../api/api';

export default async function acceptOrDenyClass(
  accepted: boolean,
  classId: number,
) {
  try {
    await api.put('class/accept-or-deny', {
      id: classId,
      accepted,
    });
  } catch (error) {
    alert('Erro ao salvar classe, tente novamente!');
  }
}
