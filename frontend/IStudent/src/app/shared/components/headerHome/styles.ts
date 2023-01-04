import styled from "styled-components";

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
`;
