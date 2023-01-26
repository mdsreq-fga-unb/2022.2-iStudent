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

  .text {
    font-size: 24px;
    text-align: center;
    margin-bottom: 70px;
  }

  .button-area {
    display: flex;
    flex-direction: row;
    margin-right: -20px;
    justify-content: center;
  }

  .cancel-button {
    width: fit-content;
    padding: 5px;
    border-style: none;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    background-color: #ff4747;
  }

  .cancel-button:hover {
    background-color: red;
  }

  .confirm-button {
    width: fit-content;
    padding: 5px;
    border-style: none;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    background-color: #04d361;
  }

  .confirm-button:hover {
    background-color: #00ff00;
  }
`