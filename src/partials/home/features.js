import React from "react";
import styled from "styled-components";
import Robust from "../../../static/feature-1.svg";
import Flexible from "../../../static/feature-2.svg";
import Native from "../../../static/feature-3.png";

const FeaturesContainer = styled.section`
  padding-top: 8rem;
`;

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.darkBrown};
  font-family: Helvetica;
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
    margin: 10rem;
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
  width: 100%;
  box-shadow: -12px 12px ${({ theme }) => theme.color.brown};
  @media ${({ theme }) => theme.mediaQuery.sm} {
    box-shadow: -20px 20px ${({ theme }) => theme.color.brown};
  }
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
  font-family: Helvetica;
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

export default () => (
  <FeaturesContainer>
    <SectionHeading>Features</SectionHeading>
    <FeaturesList>
      <Feature>
        <FeatureImg src={Robust} />
        <FeatureTitle>Robust</FeatureTitle>
        <FeatureText>
          Area charts. Scatter plots. Voronoi polygons. Easy-to-use components
          for complex charting.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureImg src={Flexible} />
        <FeatureTitle>Flexible</FeatureTitle>
        <FeatureText>
          Fully contained, reusable data visualization elements are responsible
          for their own styles and behaviors.
        </FeatureText>
      </Feature>
      <Feature>
        <FeatureImg src={Native} />
        <FeatureTitle>Native</FeatureTitle>
        <FeatureText>
          Extend the Victory experience on Android and iOS platforms with an
          identical&nbsp;API. <br />
          {/* explicit className not ideal but had to target the prism styile */}
          <code className="language-bash">npm install victory-native</code>
        </FeatureText>
      </Feature>
    </FeaturesList>
  </FeaturesContainer>
);
