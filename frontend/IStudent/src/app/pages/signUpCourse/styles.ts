import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  max-width: 100%;
  background: #d9d9d9;
  /* overflow-x: auto; */

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

  .constructor-area p
  {
    font-size: 16px;
  }

  span {
    font-size: 16px;
  }

  .add-module-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .add-module-area span {
    font-size: 14px;
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
    height: 200px;
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

  .existing-modules p {
    font-weight: 600
  }

  .module-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .module-name p {
    padding-left: 10px;
  }

  .additional-data-title {
    margin-top: 20px;
  }

  .added-classes {
    display: flex;
    flex-direction: row;
    width: 400px;
    border: 1px solid #000;
    margin-left: 20px;
    margin-top: 10px;
  }

  .added-classes li {
    border: 1px solid #000;
    width: 300px;
    margin-bottom: 10px;
    margin-top: 10px;
    justify-content: flex-start;
    list-style: none;
  }

  .class-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
  }

  .course-duration-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #000;
    gap: 30px;
    font-weight: 600;
    padding: 15px;
    margin-bottom: 20px;
  }

  .course-duration-area input {
    width: 50px;
    height: 30px;
    margin-right: 10px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .course-duration-area input:hover,
  .course-duration-area input:focus {
    border-style: inset;
    border-color: #000;
  }

  .benefits-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #000;
    gap: 30px;
    font-weight: 600;
    padding: 15px;
    margin-bottom: 20px;
  }

  .benefits-area textarea {
    width: 60%;
    height: 120px;
    overflow-y: auto;
    background-color: #e6e6f0;
    border-radius: 8px;
    border-style: none;
    padding-left: 10px;
    padding-top: 10px;
  }

  .benefits-area textarea:hover,
  .benefits-area textarea:focus {
    border-style: inset;
    border-color: #000000;
  }

  .video-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #000;
    gap: 30px;
    font-weight: 600;
    padding: 15px;
    margin-bottom: 20px;
  }

  .video-area input {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .video-area input:hover,
  .video-area input:focus {
    border-style: inset;
    border-color: #000;
  }

`

export const SecondBody = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 30px 20px;
  margin: 50px;
  font-family: "Poppins";
  font-size: 12px;
  border: 1px solid #000;

  
  .publish {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    margin-right: -30px;
  }

  .publish button {
    width: fit-content;
    padding: 10px;
    border-style: none;
    font-weight: 900;
    border-radius: 8px;
    margin-top: 10px;
  }

  .delete-button  {
    background-color: #ff4747;
    color: #ffffff;
  }

  .delete-button:hover {
    background-color: red;
  }

  .publish-button {
    background-color: #000080;
    color: #ffffff;
  }

  .publish-button:hover {
    background-color: #ffa500;
  }

  .categories {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
  }

  .categories input {
    height: 30px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .categories input:hover,
  .categories input:focus {
    border-style: inset;
    border-color: #000;
  }

  .categories button {
    width: fit-content;
    padding: 10px;
    border-style: none;
    font-size: 12px;
    font-weight: 900;
    border-radius: 8px;
    background-color: #000080;
    color: #ffffff;
    align-self: flex-end;
  }

  .categories button:hover {
    background-color: #ffa500;
  }

  .categories-add {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border: 1px solid #000;
    padding: 10px;
  }

  .course-image-area {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
  }

  .course-image-area input {
    background-color: #000080;
    border-style: none;
    color: #fff;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
  }

  .course-image-area input:hover {
    background-color: #ffa500;
    color: #000;
  }

  .value-area {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
  }

  .value-area input {
    height: 30px;
    padding-left: 10px;
    background-color: #e6e6f0;
    border-style: none;
    border-radius: 8px;
  }

  .value-area input:hover,
  .value-area input:focus {
    border-style: inset;
    border-color: #000;
  }

  .alert-area {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`