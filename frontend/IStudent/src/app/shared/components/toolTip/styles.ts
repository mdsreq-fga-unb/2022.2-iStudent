import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #000;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px
  overflow-y: auto;

  .button {
    border-style: none;
    background-color: #ffffff;
    color: #000;
    font-size: 14px;
    font-family: "Poppins";
    font-weight: 900;
    align-self: flex-start;
  }

  .header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
  }

  .photo {
    background-color: #c9c9c9;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  .name {
    font-family: "Poppins";
    font-weight: 900;
    font-size: 14px;
  }

  .perfil {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }

  .edit {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }

  .chat {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }

  .logout {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;
