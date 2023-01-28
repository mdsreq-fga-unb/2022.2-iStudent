import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/User";

export const ToolTip = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogOut = () => {
    logout()
    navigate("/pagina-inicial");
  };

  const handleEditPage = () => {
    navigate("/editar-dados");
  };

  const handleRequestPage = () => {
    navigate("/solicitacoes-agendamento");
  };

  const handleSignUpCoursePage = () => {
    navigate("/cadastrar-curso");
  };

  const handleAppointmentPage = () => {
    navigate('/meus-agendamentos')
  }

  const handleMyCourses = () => {
    navigate('/meus-cursos');
  }

  return (
    <Container>
      <div id="my-element">
        <div className="header" onClick={handleEditPage}>
          <div className="photo">
            <img src="" alt="" />
          </div>
          <div className="name">{user?.name}</div>
        </div>
        {user?.role === "TEACHER" ? (
          <div className="perfil">
            <button className="button" onClick={handleRequestPage}>
              Solicitações de Aula
            </button>
            <button className="button" onClick={handleSignUpCoursePage}>Cadastrar Cursos</button>
          </div>
        ) : (
          <div className="perfil">
            <button className="button" onClick={handleMyCourses}>Meus cursos</button>
            <button className="button" onClick={handleAppointmentPage}>Meus Agendamentos</button>
          </div>
        )}

        <div className="edit">
          <button className="button" onClick={handleEditPage}>
            Editar Meus Dados
          </button>
        </div>
        {/* <div className="chat">
          <button className="button">Chat</button>
        </div> */}
        <div className="logout">
          <button className="button" onClick={handleLogOut}>
            Sair
          </button>
        </div>
      </div>
    </Container>
  );
};
