import React from "react";
import heroBackground from "../../../static/hero-background.svg";
import heroBadge from "../../../static/hero-badge.svg";
// Settings
import HeroDemo from "./hero-demo";
import styled from "styled-components";
import formidableIcon from "../../../static/logos/logo-formidable-icon.svg";
import { Link } from "react-scroll";

const HeroContainer = styled.section`
  background-image: url(${({ bg }) => bg});
  color: ${({ theme }) => theme.color.white};
  height: 801px;
`;

const Corner = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  clip-path: polygon(0 0, 0 100%, 100% 0);
  height: 268px;
  padding: 30px;
  position: absolute;
  width: 220px;
`;

const CornerText = styled.p`
  color: ${({ theme }) => theme.color.nearBlack};
  font-family: Helvetica;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.86px;
  margin: 0;
  white-space: pre-line;
`;

const CornerF = styled.img`
  color: ${({ theme }) => theme.color.nearBlack};
  height: 63px;
  margin-top: 5px;
  width: 48px;
`;

const CenterWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.red};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "badge heading" "badge subheading" "badge getstarted";
  margin: 0 20rem;
  padding-top: 20rem;
`;

const HeroBadge = styled.img`
  align-self: center;
  grid-area: badge;
`;

const SectionHeading = styled.h1`
  align-self: center;
  grid-area: heading;
`;

const SectionSubHeading = styled.h2`
  align-self: center;
  grid-area: subheading;
`;

const GetStarted = styled.div`
  align-self: center;
  grid-area: getstarted;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 10px;
  margin: auto;
  padding: 0 50px;
  width: 637px;
`;

const LinkItem = styled.a`
  color: ${({ theme }) => theme.color.white};
  justify-self: center;
`;

const LINKS = [
  {
    text: "ABOUT",
    location: "/about"
  },
  {
    text: "DOCS",
    location: "/docs"
  },
  {
    text: "GUIDES",
    location: "/docs"
  },
  {
    text: "GALLERY",
    location: "/gallery"
  },
  {
    text: "SUPPORT",
    location: "https://spectrum.chat/victory"
  },
  {
    text: "GITHUB",
    location: "https://github.com/FormidableLabs/victory"
  },
  {
    text: "FAQS",
    location: "https://github.com/FormidableLabs/victory"
  }
];

const Hero = () => (
  <>
    <HeroContainer bg={heroBackground}>
      <Corner>
        <CornerText>{"ANOTHER OSS \n PROJECT BY"}</CornerText>
        <CornerF src={formidableIcon} />
      </Corner>
      <CenterWrapper>
        <HeroBadge src={heroBadge} />
        <SectionHeading>Victory</SectionHeading>
        <SectionSubHeading>
          React.js components for modular charting and data visualization.
        </SectionSubHeading>
        <GetStarted>npm install here</GetStarted>
      </CenterWrapper>
      <LinkContainer>
        {LINKS.map(a => (
          <LinkItem key={a.text}>{a.text}</LinkItem>
        ))}
      </LinkContainer>
    </HeroContainer>
    <HeroDemo />
  </>
);

export default Hero;
