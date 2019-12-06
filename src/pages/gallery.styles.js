import styled, { css } from "styled-components";
import { Link } from "react-static";

const Title = styled.p`
  font-weight: bold;
  color: #4c2e29;
`;

const Header = styled.h1`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GalleryItem = styled.div`
  flex: 1 0 250px;
  padding: ${props =>
    css`${props.theme.gutterSmall} 0 0 ${props.theme.gutterSmall}`};
  margin-bottom: ${props => props.theme.gutterSmall};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 300px;
  overflow: hidden;
  > * > {
    height: 100% !important;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: ${props => css`0 0 0 calc(-1 * ${props.theme.gutterSmall}) `};
`;

const PageContainer = styled.div`
  padding-left: ${props => props.theme.gutterSmall};
  padding-right: ${props => props.theme.gutterSmall};
  height: 100%;
  margin-bottom: ${props => props.theme.gutter};
  margin-bottom: > p {
    margin-bottom: ${props => props.theme.gutter};
  }
  @media (min-width: 760px) {
    padding-left: ${props => props.theme.gutter};
    padding-right: ${props => props.theme.gutter};
  }
`;

const GalleryArticle = styled.div`
  > p {
    max-width: 38em;
  }
`;

export {
  GalleryContainer,
  GalleryItem,
  GalleryArticle,
  StyledLink,
  PageContainer,
  Title,
  Header
};
