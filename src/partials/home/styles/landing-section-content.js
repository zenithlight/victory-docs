import styled from "styled-components";

export default styled.section`
  color: ${props => (props.color ? props.color : "inherit")};
  font-family: Helvetica;
  margin: ${props => (props.noMargin ? "0" : "auto")};
  padding: ${props => (props.noPadding ? "0" : "4rem")};
  @media ${({ theme }) => theme.mediaQuery.md} {
    max-width: 116rem;
  }
`;
