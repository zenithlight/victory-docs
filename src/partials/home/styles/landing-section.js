import styled from "styled-components";

export default styled.section`
  margin: ${props => (props.noMargin ? "0" : "auto")};
  max-width: 40rem;
  padding: ${props => (props.noPadding ? "0" : "4rem")};
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 116rem;
    padding: ${props => (props.noPadding ? "0" : "8rem")};
  }
  @media (max-width: 768px) {
    text-align: center;
    img {
      max-width: 240px;
    }
  }
`;
