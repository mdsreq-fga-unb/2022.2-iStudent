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

export const BodyHeader = styled.div`
  width: 60%;
  height: 200px;
  background-color: #ffffff;
  margin-left: calc((100vw) / 5);
  box-shadow: 5px 5px 5px gray;
  display: flex;
  flex-direction: row;
  gap: 150px;
  padding: 10px;

  .phrase-area {
    width: 50%;
    height: 80%;
    background-color: #d9d9d9;
    margin-left: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 5px 5px 5px gray;
  }

  .phrase-area h1 {
    font-family: "Poppins";
    font-size: 24px;
    margin-left: 20px;
  }

  .phrase-area span {
    font-family: "Poppins";
    font-size: 16;
    margin-left: 150px;
  }
`;

export const Category = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    margin-left: 350px;
    font-family: "Poppins";
  }

  .categories-list ul {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    text-align: center;
    list-style: none;
    font-family: "Poppins";
  }

  .categories-list img {
    width: 200px;
    height: 200px;
  }

  .category-card {
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .category-card:hover {
    scale: 1.1;
  }
`;
