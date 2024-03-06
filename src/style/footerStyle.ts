import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  gap: 30px;
  border-top: 1px dashed gray;
  height: 100px;
  font-size: 12px;
  color: gray;
  & a {
    text-decoration: none;
    color: gray;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0 0 5px;
`;
