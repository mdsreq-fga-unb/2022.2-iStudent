import styled from "styled-components";

export const Container = styled.div`
  .close-modal {
    display: flex;
    justify-content: flex-end;
  }

  .close-modal button {
    font-size: 20px;
    font-weight: 900;
    color: red;
    background-color: #fff;
    border-style: none;
  }

  .class h3 {
    font-size: 20px;
  }

  .class-button {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
  }

  .class-button button {
    font-family: "Poppins";
    width: 150px;
    height: 50px;
    background-color: #fff;
    color: gray;
    border-color: #c9c9c9;
    box-shadow: none;
  }

  .class-button button:hover {
    border-color: #000080;
    color: #000080;
  }

  .class-button button:focus {
    border-color: #000080;
    color: #000080;
  }

  .hour {
    margin-top: 40px;
  }

  .input-hour {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .week-day select {
    border-style: none;
    background-color: #c9c9c9;
    height: 30px;
    width: 200px;
    padding-left: 10px;
    border-radius: 4px;
    font-family: "Poppins";
  }

  .initial-hour input {
    border-style: none;
    background-color: #c9c9c9;
    height: 30px;
    width: 80px;
    padding-left: 10px;
    border-radius: 4px;
  }

  .final-hour input {
    border-style: none;
    background-color: #c9c9c9;
    height: 30px;
    width: 80px;
    padding-left: 10px;
    border-radius: 4px;
  }
`;

export const Button = styled.div`
  margin-top: 60px;
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
