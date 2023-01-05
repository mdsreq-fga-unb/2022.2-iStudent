import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/User";

export const ToolTip = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLogOut = () => {
    navigate("/pagina-inicial");
  };

  const handleEditPage = () => {
    navigate("/editar-dados");
  };
  return (
    <Container>
      <div id="my-element">
        <div className="header">
          <div className="photo"></div>
          <div className="name">{user?.name}</div>
        </div>
        <div className="perfil">
          <button className="button">Meus cursos</button>
          <button className="button">Meus Professores</button>
        </div>
        <div className="edit">
          <button className="button" onClick={handleEditPage}>
            Editar Meus Dados
          </button>
        </div>
        <div className="chat">
          <button className="button">Chat</button>
        </div>
        <div className="logout">
          <button className="button" onClick={handleLogOut}>
            Sair
          </button>
        </div>
      </div>
    </Container>
  );
};