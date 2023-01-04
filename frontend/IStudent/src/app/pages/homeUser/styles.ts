import styled from "styled-components";

export const Container = styled.div`
  height: 180vh;
  background: #d9d9d9;

  footer {
    font-size: 18px;
    font-family: "Poppins";
    font-weight: 900;
    text-align: center;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
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

export const CourseArea = styled.div`
  h3 {
    margin-left: 350px;
    margin-top: 50px;
    font-family: "Poppins";
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    justify-content: center;
  }
`;

export const TeacherArea = styled.div`
  h3 {
    margin-left: 350px;
    margin-top: 50px;
    font-family: "Poppins";
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 60px;
    list-style: none;
    justify-content: center;
  }
`;