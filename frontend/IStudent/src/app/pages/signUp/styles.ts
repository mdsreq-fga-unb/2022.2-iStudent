import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #000080;

  .signUp-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
  }

  h1 {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 150px;
  }

  span {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 40px;
    opacity: 50%;
  }

  .image-text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .signUp-image {
    width: 500px;
    height: 500px;
  }

  .button-area {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 100px;
    margin-left: -120px;
  }

  .button-student {
    margin-right: 20px;
    width: 230px;
    height: 70px;
    border-radius: 8px;
    background-color: #0000cd;
    border-style: none;
    color: #ffffff;
    font-family: "Poppins";
    font-size: 20px;
  }

  .button-teacher {
    width: 230px;
    height: 70px;
    border-radius: 8px;
    background-color: #ffa500;
    border-style: none;
    color: #ffffff;
    font-family: "Poppins";
    font-size: 20px;
  }

  .button-student:hover {
    opacity: 80%;
  }

  .button-teacher:hover {
    opacity: 80%;
  }
`;
