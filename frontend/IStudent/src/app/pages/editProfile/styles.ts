import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  background: #d9d9d9;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: auto;
  border: 1px solid #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-bottom: 20px;
  font-family: 'Poppins';
  font-size: 12px;

  .my-data-title {
    padding: 30px 10px 5px 10px;
    border-bottom: 1px solid #000000;
    margin-right: 20px;
  }

  h1 {
    font-size: 26px;
    font-weight: 900;
  }

  .photo-input input {
    display: none;
  }

  .photo-input {
    display: flex;
    justify-content: flex-start;
  }

  .photo-input label,
  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    color: #696969;
    background-color: #e6e6f0;
    text-align: center;
    padding: 10px;
    border: 1px dashed currentColor;
    cursor: pointer;
  }

  .photo-input label:hover {
    color: #000000;
  }

  .picture-image {
    width: 100%;
  }

  .photo,
  img {
    padding: 0 !important;
    border: none !important;
  }

  .my-data {
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .my-data input {
    width: 95%;
    height: 30px;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    padding-left: 15px;
  }

  .my-data textarea {
    width: 95%;
    height: 90px;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    padding-left: 5px;
    overflow-y: auto;
  }

  .my-data input:hover {
    border-style: outset;
    border-color: #000000;
  }

  .my-data input:focus {
    border-style: outset;
    border-color: #000000;
  }

  .my-password {
    padding-top: 4px;
    display: flex;
    flex-direction: column;
  }

  .my-password input {
    width: 95%;
    height: 30px;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    padding-left: 15px;
  }

  .my-password textarea {
    padding: 15px
  }

  .my-password input:hover {
    border-style: inset;
    border-bottom: 2px solid #000000;
  }

  .my-password input:focus {
    border-style: inset;
    border-bottom: 2px solid #000000;
  }

  button {
    border-style: none;
    border-radius: 8px;
    background-color: #000080;
    color: #ffffff;
    padding: 10px;
    margin-right: 30px;
    margin-top: 30px;
    font-family: 'Poppins';
    font-weight: 900;
    font-size: 14px;
    width: 100px;
  }

  button:hover {
    background-color: #ffa500;
  }
`;

export const DeleteAccount = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 200px;
    height: 40px;
    background-color: #ff4747;
    border-style: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 900;
  }

  button:hover {
    background-color: red;
  }
`;
