import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background: #d9d9d9;

  .columns-space {
    display: flex;
    flex-direction: row
  }
`

export const FirstBody = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 40px;
  position: absolute;
  left: 200px;
  top: 100px;
  font-family: "Poppins";
  font-size: 12px;
  border: 1px solid #000;
`

export const SecondBody = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 40px;
  position: absolute;
  top: 100px;
  right: 100px;
  font-family: "Poppins";
  font-size: 12px;
  border: 1px solid #000
`