import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  text-align: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 116rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    img {
      max-width: 240px;
    }
  }
`;
