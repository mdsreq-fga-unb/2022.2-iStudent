import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: #d9d9d9;
`;

export const Header = styled.div`
  height: 250px;
  background: #000080;

  .title {
    color: #ffffff;
    font-family: "Poppins";
    font-size: 40px;
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

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: -40px;

  span {
    color: #fff;
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 200px;
    border-style: none;
    height: 40px;
    border-radius: 8px;
    padding-left: 20px;
    box-shadow: 5px 5px 5px blue;
  }
`;

export const Cards = styled.div``;
