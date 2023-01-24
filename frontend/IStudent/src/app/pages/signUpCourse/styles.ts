import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background: #d9d9d9;

  .columns-space {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FirstBody = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 40px 20px;
  margin: 50px 100px 50px 200px;
  font-family: "Poppins";
  font-size: 12px;
  border: 1px solid #000;

  .course-basic-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 10px;
    border: 1px solid #000;
    padding: 20px;
  }

  .course-basic-info p {
    font-size: 16px;
  }

  .course-basic-info input {
    width: 500px;
    height: 30px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .course-basic-info textarea {
    width: 500px;
    height: 120px;
    overflow-y: auto;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    padding-left: 10px;
    padding-top: 10px;
  }

  .course-basic-info textarea:hover,
  .course-basic-info textarea:focus
  {
    border-style: outset;
    border-color: #000000;
  }

  .course-basic-info input:hover,
  .course-basic-info input:focus
  {
    border-style: outset;
    border-color: #000000;
  }

  .constructor-area {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border: 1px solid #000;
    padding: 20px;
  }

  .add-module-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .add-module-area span {
    font-size: 12px;
    font-weight: 600;
  }

  .add-module-area button {
    width: fit-content;
    padding: 10px;
    border-style: none;
    background-color: #000080;
    color: #ffffff;
    font-weight: 900;
    border-radius: 8px;
  }

  .add-module-area button:hover {
    background-color: #ffa500;
  }

  .module-area {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    border: 1px solid #000;
    padding: 20px;
    overflow-y: auto;
  }

  .module-area input {
    height: 30px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .module-area input:hover,
  .module-area input:focus
  {
    border-style: inset;
    border-color: #000000;
  }

  .existing-modules {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    padding-top: 10px;
    overflow-y: auto;
  }

  .existing-modules li {
    display: flex;
    flex-direction: row;
    border: 1px solid #000;
    padding: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
  }

  .additional-data-title {
    margin-top: 20px;
  }
`

export const SecondBody = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 40px 20px;
  margin: 50px;
  font-family: "Poppins";
  font-size: 12px;
  border: 1px solid #000
`