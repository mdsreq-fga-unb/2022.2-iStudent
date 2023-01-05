import { useNavigate } from "react-router-dom";
import { Container, Header, Input, Cards } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AvTeacherCard } from "../../shared/components";
export const AvailableTeacher = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/pagina-inicial");
  };

  return (
    <Container>
      <Header>
        <div className="top">
          <ArrowBackIcon
            fontSize="large"
            className="arrow"
            onClick={handleClickHome}
          />
          <div className="product-name" onClick={handleClickHome}>
            iStudent
          </div>
        </div>
        <div className="title">
          Estes são os <br /> professores disponíveis:
        </div>
      </Header>
      <Input>
        <div>
          <span>Matéria</span>
          <input type="text" />
        </div>
        <div>
          <span>Dia da Semana</span>
          <input type="text" />
        </div>
        <div>
          <span>Horário</span>
          <input type="time" />
        </div>
      </Input>
      <Cards>
        <AvTeacherCard
          name="Kleber"
          course="Química"
          bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
        />
        <AvTeacherCard
          name="Kleber"
          course="Química"
          bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
        />
        <AvTeacherCard
          name="Kleber"
          course="Química"
          bio="Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
        />
      </Cards>
    </Container>
  );
};
