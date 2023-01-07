import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #d9d9d9;
`;

export const Body = styled.div`
  border: 1px solid;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 700px;
  max-width: 700px;
  height: 500px;
  max-height: 500px;
  margin: auto;
  margin-top: 100px;
  font-family: "Poppins";
  overflow-y: auto;

  h3 {
    margin-bottom: 15px;
  }

  h5 {
    font-size: 16px;
  }

  .request-list {
    padding-left: 20px;
    margin-top: 20px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 40px;
  }
`;
