import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #d9d9d9;
  padding-bottom: 40px;
`;

export const Header = styled.div`
  height: 230px;
  background: #000080;

  .title {
    color: #ffffff;
    font-family: 'Poppins';
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    padding-top: 0px;
  }

  .product-name {
    color: #ffffff;
    font-family: 'Poppins';
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

export const CourseCardArea = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    justify-content: center;
  }
`