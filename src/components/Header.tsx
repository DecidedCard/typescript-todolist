import styled from "styled-components";

const Header = () => {
  return <HeaderStyle>My TodoList</HeaderStyle>;
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
`;
