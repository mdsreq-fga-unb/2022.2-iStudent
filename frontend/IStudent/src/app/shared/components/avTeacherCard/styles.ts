import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 700px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-top: 20px;
  gap: 30px;

  .img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: #c9c9c9;
  }

  h3 {
    font-family: "Poppins";
    font-size: 24px;
    font-weight: 900;
  }

  span {
    font-family: "Poppins";
    font-size: 14px;
  }
`;

export const Body = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Poppins";
  font-size: 14px;
`;

export const Button = styled.div`
  margin-top: 60px;
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;

  button {
    border-style: none;
    border-radius: 10px;
    background-color: #04d361;
    color: #fff;
    width: 150px;
    height: 50px;
    font-size: 16px;
    font-weight: 900;
    font-family: "Poppins";
  }

  button:hover {
    background-color: #00ff00;
  }
`;
