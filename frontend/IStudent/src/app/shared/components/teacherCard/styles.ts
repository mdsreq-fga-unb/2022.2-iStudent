import styled from "styled-components";

export const Teachers = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 13vw;
  height: 15vw;
  border: 1px solid #000;

  .teacher-image {
    width: 70%;
    height: 60%;
    background-color: #000000;
    margin-top: 8px;
    cursor: pointer;
  }

  .teacher-image:hover {
    scale: 1.1;
  }

  .teacher-details {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    margin-top: 10%;
    padding-left: 1vw;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "Poppins";
    cursor: pointer;
  }

  .teacher-name {
    font-weight: 900;
    font-size: 1vw;
  }

  .teacher-course-name {
    font-size: 1vw;
    opacity: 70%;
  }

  .value-hour {
    font-size: 1vw;
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
    align-items: center;
    gap: 10px;
    font-size: 1vw;
    font-weight: 900;
    color: #ffa500;
  }
`;
