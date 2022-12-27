import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleClickTeacher = () => {
    navigate("/cadastro-professor");
  };

  const handleClickStudent = () => {
    navigate("/cadastro-estudante");
  };

  return (
    <Container>
      <div className="signUp-area">
        <div className="image-text-area">
          <div className="text-area">
            <h1>iStudent</h1>
            <span>
              O seu aprendizado é a <br /> nossa prioridade!
            </span>
          </div>
          <div className="button-area">
            <button className="button-student" onClick={handleClickStudent}>
              Sou Estudante
            </button>
            <button className="button-teacher" onClick={handleClickTeacher}>
              Sou Professor
            </button>
          </div>
        </div>
        <img className="signUp-image" src="../public/signUpImage.svg" />
      </div>
    </Container>
  );
};
