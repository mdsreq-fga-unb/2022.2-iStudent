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
  width: 50%;
  height: auto;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  margin-left: 25%;
  margin-top: -50px;
  font-family: "Poppins";
  font-size: 12px;
`;
