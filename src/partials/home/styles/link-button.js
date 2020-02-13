import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background-color: ${({ bg, theme }) => bg || theme.color.white};
  color: ${({ color, theme }) => color || theme.color.black};
  display: block;
  font-size: 1.4rem;
  height: 40px;
  line-height: 40px;
  margin: ${({ noMargin }) => noMargin || "auto"};
  letter-spacing: 1px;
  width: ${({ width }) => width || "200px"};
  text-align: center;
`;

export default LinkButton;
