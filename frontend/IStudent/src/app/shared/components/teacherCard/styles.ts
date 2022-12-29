import styled from "styled-components";

export const Teachers = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  gap: 30px;
  background-color: #ffffff;
  width: 250px;
  height: 300px;

  .teacher-card {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5px;
    font-family: "Poppins";
    color: #000000;
  }

  .teacher-image {
    margin-left: -25px;
    width: 70%;
    height: 50%;
    background-color: #000000;
    margin-top: 8px;
    cursor: pointer;
  }

  .teacher-image:hover {
    scale: 1.1;
  }

  .teacher-details {
    background-color: #ffffff;
    width: 250px;
    margin-left: -45px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
  }

  .teacher-name {
    font-weight: 900;
    font-size: 18px;
  }

  .teacher-course-name {
    font-size: 14px;
    opacity: 70%;
  }

  .value-hour {
    font-size: 18px;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .per-hour {
    opacity: 70%;
  }

  .rating {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 16px;
    font-weight: 900;
    color: #ffa500;
  }
`;
