import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  .button-area {
    display: flex;
    flex-direction: row;
  }

  .accept {
    background-color: #ff4747;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    border-style: none;
    border-radius: 8px;
    width: 90px;
    height: 30px;
  }

  .refuse {
    background-color: #2ea824;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    border-style: none;
    border-radius: 8px;
    width: 90px;
    height: 30px;
  }

  .detail {
    background-color: #c9c9c9;
    color: #000;
    font-family: "Poppins";
    font-size: 16px;
    border-style: none;
    border-radius: 8px;
    width: 90px;
    height: 30px;
  }
`;
