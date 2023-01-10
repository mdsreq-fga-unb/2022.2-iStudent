import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #d9d9d9;
`;

export const Header = styled.div`
  height: 250px;
  background: #000080;

  .title {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 62px;
    font-weight: 500;
    text-align: center;
    padding-top: 0px;
  }

  .product-name {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 32px;
    font-weight: 900;
    align-self: flex-end;
    cursor: pointer;
    padding-right: 50px;
  }

  .arrow {
    color: #ffffff;
    margin-left: 50px;
    margin-top: 20px;
    cursor: pointer;
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Body = styled.div`
  z-index: 999;
  background-color: #ffffff;
  width: 500px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50px;
  padding-bottom: 40px;
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

  .final {
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .final button {
    border-style: none;
    border-radius: 8px;
    background-color: #000080;
    color: #ffffff;
    padding: 10px;
    margin-right: 30px;
    font-family: "Poppins";
    font-weight: 900;
    font-size: 14px;
  }

  .final button:hover {
    background-color: #ffa500;
  }

  .alert-area {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .havent-login {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    margin-top: 40px;
  }
`;
