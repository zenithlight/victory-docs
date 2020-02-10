import styled from "styled-components";

const HomeButton = styled.button`
  background-color: ${({ bg, theme }) => bg || theme.color.white};
  color: ${({ color, theme }) => color || theme.color.black};
  display: block;
  font-family: Helvetica;
  font-size: 14px;
  height: 40px;
  margin: auto;
  letter-spacing: 1px;
  width: ${({ width }) => width || 200}px;
`;

export default HomeButton;
