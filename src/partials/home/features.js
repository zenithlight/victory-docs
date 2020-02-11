import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  LandingSectionWrapper,
  LandingSectionContent,
  DropShadow
} from "./styles";
import { Element } from "react-scroll";

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

const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;
  margin: 6rem 0;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 3rem;
  }
`;

const Feature = styled.div`
  justify-self: center;
  width: 160px;
  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 280px;
  }
`;

const FeatureImg = styled.img`
  ${DropShadow}
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.color.darkBrown};
  font-family: HelveticaNeue;
  font-size: 18px;
  font-weight: bold;
  margin-top: 4rem;
  line-height: 0.96;
  text-align: center;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin-top: 3rem;
    text-align: left;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 24px;
  }
`;

const FeatureText = styled.p`
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

const Features = ({ featureArray }) => (
  <LandingSectionWrapper>
    <LandingSectionContent>
      <Element name="Features">
        <SectionHeading>Features</SectionHeading>
      </Element>
      <FeaturesList>
        {featureArray.map(feature => (
          <Feature key={feature.title}>
            <FeatureImg src={feature.icon} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureText>
              {feature.description}{" "}
              {feature.code && (
                <>
                  <br />
                  {/* explicit className not ideal but had to target the prism style */}
                  <code className="language-bash">{feature.code}</code>
                </>
              )}
            </FeatureText>
          </Feature>
        ))}
      </FeaturesList>
    </LandingSectionContent>
  </LandingSectionWrapper>
);

Features.propTypes = {
  featureArray: PropTypes.arrayOf(PropTypes.shape())
};

export default Features;
