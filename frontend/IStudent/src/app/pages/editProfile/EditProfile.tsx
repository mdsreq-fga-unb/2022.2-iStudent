import { Body, Container, DeleteAccount } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/User";
import deleteAccount from "../../shared/services/user/deleteAccount";
import { HeaderUser } from "../../shared/components";
import { useState } from "react";
import saveSubject from "../../shared/services/teachers/saveSubject";

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, changeToken } = useUser();

  const [subject, setSubject] = useState('')

  const handleDeleteAccount = async () => {
    await deleteAccount();
    alert("Conta deletada com sucesso!");
    setUser(null);
    changeToken("");
    navigate("/");
  };

  const handleSaveSubject = async () => {
    await saveSubject(subject, user?.subject?.id || 0)
    alert("Materia salva com sucesso!");
  }

  return (
    <Container>
      <HeaderUser />
      <Body>
        <div className="my-data-title">
          <h1>Seus Dados</h1>
        </div>
        <div className="my-data">
          <div className="photo-input">
            <input type="file" accept="image/*" id="picture-input" />
            <label htmlFor="picture-input">
              <span className="picture-image">Sua Foto</span>
            </label>
          </div>
          <div className="email">
            <p>Nome</p>
            <input type="text" placeholder={user?.name} />
          </div>
        </div>
        <div className="my-password">
          <div className="password">
            <p>E-mail</p>
            <input type="email" placeholder={user?.email} />
          </div>
        </div>
        <button>Salvar</button>

        {user?.role === 'TEACHER' && <>
        <div className="my-data-title">
          <h1>Escolha sua matéria</h1>
        </div>
        <div className="my-data">
          <div className="email">
            <p>Matéria</p>
            <input type="text" placeholder={user?.subject?.name}  onChange={(e) => setSubject(e.target.value)}/>
          </div>
        </div>
        <button onClick={handleSaveSubject}>Salvar</button>
        </>
        }
      </Body>
      <DeleteAccount>
        <button onClick={handleDeleteAccount}>Excluir minha conta</button>
      </DeleteAccount>
    </Container>
  );
};
