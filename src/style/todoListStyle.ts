import styled, { css } from "styled-components";

export const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
  padding: 0 10px;
`;

export const TodoListTitleStyle = styled.h2`
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const TodoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 200px;
  min-height: 100px;
  font-size: 14px;
  padding: 8px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 12px;
`;

export const TodoBtnDivStyle = styled.div`
  margin-left: auto;
`;

export const TodoBtnStyle = styled.button<{ checkBtn: boolean }>`
  background-color: lightblue;
  margin: 0 5px;
  border: none;
  border-radius: 8px;
  ${(props) =>
    props.checkBtn &&
    css`
      background-color: lightcoral;
    `}
`;
