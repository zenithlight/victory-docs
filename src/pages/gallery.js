import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withRouteData, Link } from "react-static";
import * as Victory from "victory";
import styled, { css } from "styled-components";

// Child Components
import Footer from "../partials/footer";

import Preview from "../partials/gallery/preview";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.scope = {
      ...Victory,
      _: require("lodash"),
      React,
      ReactDOM,
      PropTypes
    };
  }

  parseRaw(str) {
    const playground = "playground_norender";
    const start = str.indexOf(playground) + playground.length;
    const end = str.indexOf("```", start);
    return str.slice(start, end);
  }

  renderPreviewItem(item) {
    const code = this.parseRaw(item.raw);
    const slug = item.data.slug;
    const title = item.data.title;

    return (
      <StyledLink to={`/gallery/${slug}`}>
        <Preview codeText={code} noRender={false} scope={this.scope} />
        <Title>{title}</Title>
      </StyledLink>
    );
  }

  render() {
    const { gallery } = this.props;
    const previews = gallery.map((item, index) => (
      <GalleryItem key={index}>{this.renderPreviewItem(item)}</GalleryItem>
    ));

    return (
      <React.Fragment>
        <PageContainer>
          <Header>Victory Gallery</Header>
          <p>
            Body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <GalleryArticle>
            <GalleryContainer>{previews}</GalleryContainer>
          </GalleryArticle>
        </PageContainer>
        <Footer />
      </React.Fragment>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.object,
  gallery: PropTypes.array
};

Gallery.defaultProps = {
  params: null
};

export default withRouteData(({ gallery, location }) => (
  <Gallery gallery={gallery} location={location} />
));

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
  padding-left: ${props => props.theme.gutter};
  padding-right: ${props => props.theme.gutter};
  height: 100%;
  margin-bottom: ${props => props.theme.gutter};
  margin-bottom: > p {
    margin-bottom: ${props => props.theme.gutter};
  }
`;

const GalleryArticle = styled.div`
  > p {
    max-width: 38em;
  }
`;
