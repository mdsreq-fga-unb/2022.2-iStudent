import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #d9d9d9;

  footer {
    font-size: 18px;
    font-family: "Poppins";
    font-weight: 900;
    text-align: center;
    margin-top: 25vh;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
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
  justify-content: space-between;
  padding: 10px;

  img {
    margin-right: 120px;
  }

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
    text-align: center;
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
    margin-bottom: 20px;
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
