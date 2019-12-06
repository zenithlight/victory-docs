import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withRouteData } from "react-static";
import * as Victory from "victory";
// Child Components
import Footer from "../partials/footer";

import Preview from "../partials/gallery/preview";
import {
  StyledLink,
  Title,
  GalleryArticle,
  GalleryItem,
  GalleryContainer,
  PageContainer,
  Header
} from "./gallery.styles";

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
