import styled from "styled-components";

export const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  border-bottom: 1px dashed gray;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 200px;
`;

export const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 1px 5px 0.7px gray;
`;

export const InputBtnStyle = styled.button`
  border: none;
  border-radius: 8px;
  background-color: lightblue;
  width: 50px;
  height: 25px;
  margin: 5px 5px 5px auto;
`;
