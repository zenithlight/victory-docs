import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Page from "../partials/page";
import Showcase from "../partials/about/showcase";
import { withRouteData } from "react-static";

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.red};
  margin-top: 2rem;
`;

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subheader = styled.h2`
  font-size: 3rem;
`;

const About = ({ location }) => {
  return (
    <Page location={location}>
      <h1>Victory: Charting for React and React Native</h1>
      <p>
        {/*
         * TODO: Customize these buttons
         * https://github.com/FormidableLabs/formidable-landers/issues/175
         */}
        <iframe
          src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        >
          &nbsp;
        </iframe>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        >
          &nbsp;
        </iframe>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="158px"
          height="30px"
        >
          &nbsp;
        </iframe>
      </p>
      <p>
        Victory is a set of modular charting components for React and React
        Native. Victory makes it easy to get started without sacrificing
        flexibility. Create one of a kind data visualizations with fully
        customizable styles and behaviors. Victory uses the same API for web and
        React Native applications for easy cross-platform charting.
      </p>
      <p>
        Victory is helmed by Formidable’s{" "}
        <a href="https://github.com/boygirl"> Lauren Eastridge</a>.
      </p>
      <p>
        <a href="https://github.com/FormidableLabs/victory/graphs/contributors">
          See Victory Contributors
        </a>
      </p>

      <Divider />

      <Section>
        <Subheader id="showcase">Victory in Use</Subheader>
        <p>
          Victory is used for charting across the web, from publicly-consumed
          informational graphs to internal tracking and reporting.
        </p>
      </Section>

      <Showcase />

      <h1>About Formidable</h1>
      <p>
        Formidable is a Seattle-based consultancy and development shop, focused
        on open-source, full-stack JavaScript using React.js and Node.js, and
        the architecture of large-scale JavaScript applications. We build
        products for some of the world’s biggest companies, while helping their
        internal teams develop smart, thoughtful, and scalable systems.
      </p>
    </Page>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default withRouteData(About);
