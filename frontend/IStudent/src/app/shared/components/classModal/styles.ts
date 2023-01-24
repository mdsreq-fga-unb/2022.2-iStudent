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

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .name input {
    width: 80%;
    height: 30px;
    border-style: none;
    background-color: #e6e6f0;
    border-radius: 8px;
    padding-left: 10px;
  }

  .name input:hover,
  .name input:focus {
    border-style: inset;
    border-color: #000;
  }


  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .description textarea {
    width: 80%;
    height: 120px;
    border-style: none;
    background-color: #e6e6f0;
    border-radius: 8px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .description textarea:hover,
  .description textarea:focus {
    border-style: inset;
    border-color: #000;
  }

  .image-space {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  }

  .image-space input {
    background-color: #000080;
    border-style: none;
    color: #fff;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
  }

  .image-space input:hover {
    background-color: #ffa500;
    color: #000;
  }

  .url-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .url-area input {
    width: 80%;
    background-color: #e6e6f0;
    border-style: none;
    color: #fff;
    border-radius: 8px;
    padding: 5px;
  }

  .url-area input:hover,
  .url-area input:focus {
    border-style: inset;
    border-color: #000;
  }

  .button-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 60px;
  }

  .button-area button {
    width: fit-content;
    height: auto;
    padding: 10px;
    border-style: none;
    background-color: #000080;
    border-radius: 8px;
    color: #fff;
  }

  .button-area button:hover {
    background-color: #ffa500;
  }

`;