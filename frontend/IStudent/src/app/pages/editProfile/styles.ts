import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #d9d9d9;
`;

export const Header = styled.div`
  height: 60px;
  background: #000080;
  display: flex;
  flex-direction: row;

  .product-name {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 28px;
    font-weight: 900;
    align-self: center;
    margin-left: 20px;
    cursor: pointer;
    padding-right: 50px;
  }

  .button-space {
    display: flex;
    flex-direction: row;
    margin-left: 300px;
    gap: 30px;
  }

  input {
    border-radius: 16px;
    height: 40px;
    width: 60%;
    align-self: center;
    padding-left: 15px;
    border-style: none;
  }

  button {
    color: #ffffff;
    background-color: #000080;
    border-color: #ffffff;
    height: 40px;
    width: auto;
    padding: 10px;
    align-self: center;
    margin-left: 5px;
    font-family: "Poppins";
  }

  .profile-space {
    background-color: #c9c9c9;
    border-radius: 100%;
    width: 50px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .profile-space:hover {
    transform: scale(1.1);
  }

  .notification-item {
    font-size: 40px;
    margin-top: 10px;
    color: #ffffff;
    cursor: pointer;
  }

  .notification-item:hover {
    transform: scale(1.1);
  }

  .shoppingCart-item {
    font-size: 40px;
    margin-top: 10px;
    color: #ffffff;
    cursor: pointer;
  }

  .shoppingCart-item:hover {
    transform: scale(1.1);
  }
`;

export const Body = styled.div`
  z-index: 999;
  background-color: #ffffff;
  width: 500px;
  height: 30vh;
  border: 1px solid #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: calc(100vw / 2.7);
  margin-top: 50px;
  font-family: "Poppins";
  font-size: 12px;

  .my-data-title {
    padding: 20px;
    border-bottom: 1px solid #000000;
    margin-right: 20px;
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
    margin-top: 5px;
    padding-left: 5px;
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
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .my-password input {
    width: 95%;
    height: 30px;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    margin-top: 5px;
    padding-left: 5px;
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
    font-family: "Poppins";
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
    font-family: "Poppins";
    font-weight: 900;
  }

  button:hover {
    background-color: red;
  }
`;
