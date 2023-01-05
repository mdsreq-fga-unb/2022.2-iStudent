import { Container, Header, Body, Button } from "./styles";

type CardProps = {
  name: string;
  course: string;
  bio: string;
};

export const AvTeacherCard = (props: CardProps) => {
  return (
    <Container>
      <Header>
        <div className="img"></div>
        <div className="teacher-name">
          <h3>{props.name}</h3>
          <span>{props.course}</span>
        </div>
      </Header>
      <Body>
        <div>
          <h5>{props.bio}</h5>
        </div>
      </Body>
      <Button>
        <button>Solicitar Aula</button>
      </Button>
    </Container>
  );
};
