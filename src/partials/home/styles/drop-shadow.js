import { css } from "styled-components";

export default css`
  width: 100%;
  box-shadow: -12px 12px ${({ theme }) => theme.color.brown};
  @media ${({ theme }) => theme.mediaQuery.sm} {
    box-shadow: -20px 20px ${({ theme }) => theme.color.brown};
  }
`;
