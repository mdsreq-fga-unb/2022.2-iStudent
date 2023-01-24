import styled, { keyframes } from "styled-components";

const fromBottom = keyframes`
  from{
        opacity: 0;
        transform: translateY(30px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`
const fromTop = keyframes`
  from{
        opacity: 0;
        transform: translateY(-30px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`
export const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  background: #c9c9c9;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  width: 600px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  font-family: 'Poppins';
  font-size: 20px;
  color: #000080;

  .text1 {
    animation: ${fromTop} .7s .2s backwards;
  }

  .text2 {
    animation: ${fromBottom} .7s backwards;
  }
`