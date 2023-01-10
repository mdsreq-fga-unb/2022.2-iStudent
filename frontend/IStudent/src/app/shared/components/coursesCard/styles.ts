import styled from "styled-components";

export const Courses = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    margin-left: 350px;
    font-family: "Poppins";
  }

  .course-card {
    width: 16vw;
    height: 16vw;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5px;
    font-family: "Poppins";
    cursor: pointer;
  }

  .course-img {
    width: 90%;
    height: 50%;
    background-color: #000000;
  }

  .course-img:hover {
    scale: 1.1;
  }

  .course-name {
    font-size: 1vw;
    font-weight: 900;
  }

  .course-teacher {
    font-size: 1vw;
    opacity: 70%;
  }

  .course-stars {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: #ffa500;
    font-size: 1vw;
    font-weight: 900;
  }

  .course-price {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .current-price {
    font-size: 1vw;
    font-weight: 900;
  }

  .original-price {
    opacity: 80%;
    font-size: 1vw;
  }
`;
