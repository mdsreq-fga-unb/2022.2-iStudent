import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  max-width: 100%;
  padding-bottom: 40px;
  background: #d9d9d9;

  .detail-page-title {
    width: fit-content;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .other-courses-title {
    width: fit-content;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Divisor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FirstBody = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 40px 20px;
  margin: auto;
  margin-top: 50px;
  font-family: 'Poppins';
  font-size: 12px;
  border: 1px solid #000;

  .teacher-name-container {
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000080;
  }

  .teacher-name-container p{
    font-size: 20px;
    opacity: 90%;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000080;
  }

  .info-container span {
    font-size: 18px;
    font-weight: 900;
  }

  .info-container p {
    font-size: 16px;
  }

  .category-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .duration-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .description-container span {
    font-size: 18px;
    font-weight: 900;
  }

  .description-container p {
    font-size: 16px;
  }
`;

export const SecondBody = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 30px 20px;
  margin-top: 50px;
  margin-right: 150px;
  margin-left: 30px;
  font-family: 'Poppins';
  font-size: 12px;
  border: 1px solid #000;

  .image-container {
    width: 300px;
    height: 200px;
    background-color: #000;
    margin: auto;
  }

  .price-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
  }

  .price-container p {
    font-size: 24px;
    font-weight: 900;
  }

  .price-container span {
    font-size: 14px;
    margin-bottom: 14px;
  }

  .button-container {
    margin: auto;
  }

  .button-container button {
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    border-style: none;
    border-radius: 8px;
    background-color: #000080;
    color: #ffffff;
  }

  .button-container button:hover {
    background-color: #ffa500;
  }
`;

export const OtherCourses = styled.div`
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