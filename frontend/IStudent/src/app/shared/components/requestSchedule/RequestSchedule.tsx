import { Container } from "./styles";
import Tippy from "@tippyjs/react";
import { DetailCard } from "../index";

export const RequestSchedule = () => {
  return (
    <Container>
      <div className="content">
        <h5>Kleber Gomes De Morais</h5>
        <div className="button-area">
          <button className="accept">Aceitar</button>
          <button className="refuse">Recusar</button>
          <Tippy
            content={<DetailCard />}
            interactive={true}
            delay={1}
            duration={1}
            placement="right"
          >
            <button className="detail">Detalhes</button>
          </Tippy>
        </div>
      </div>
    </Container>
  );
};
