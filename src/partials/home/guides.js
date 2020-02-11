import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LandingSectionWrapper, LandingSectionContent } from "./styles";

// Demos
import DemoCustomChart from "./demo-custom-chart";
import DemoSharedEvents from "./demo-shared-events";
import DemoCustomComponents from "./demo-custom-components";
import DemoTooltips from "./demo-tooltips";
import DemoZoom from "./demo-zoom";
import DemoAnimation from "./demo-animation";
import styled from "styled-components";

// * the section headings could be extracted into generic style
const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: 24px;
  font-weight: bold;
  line-height: 1.06;
  letter-spacing: 0.72px;
  margin: 0;
  text-align: center;
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 36px;
  }
`;

const GuidesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;
  margin: 6rem 0;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 3rem;
  }
`;

const Guide = styled.div``;
const GuideLink = styled(Link)`
  font-size: 14px;
  line-height: 1.29;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    line-height: 1.29;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 24px;
    line-height: 1.6;
  }
`;

const Guides = () => (
  <LandingSectionWrapper>
    <LandingSectionContent>
      <SectionHeading>Guides</SectionHeading>
      <GuidesList>
        <Guide>
          <DemoCustomChart />
          <GuideLink to="/guides/custom-charts">Custom Charts</GuideLink>
        </Guide>
        <Guide>
          <DemoZoom />
          <GuideLink to="/guides/brush-and-zoom">Brush and Zoom</GuideLink>
        </Guide>
        <Guide>
          <DemoCustomComponents />
          <GuideLink to="/guides/custom-components">
            Custom Components
          </GuideLink>
        </Guide>
        <Guide>
          <DemoTooltips />
          <GuideLink to="/guides/tooltips">Tooltips</GuideLink>
        </Guide>
        <Guide>
          <DemoSharedEvents />
          <GuideLink to="/guides/events">Events</GuideLink>
        </Guide>
        <Guide>
          <DemoAnimation />
          <GuideLink to="/guides/animations">Animations</GuideLink>
        </Guide>
      </GuidesList>
    </LandingSectionContent>
  </LandingSectionWrapper>
);

export default Guides;
