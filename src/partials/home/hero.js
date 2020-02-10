import React from "react";
// Settings
import HeroDemo from "./hero-demo";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeroContainer = styled.section`
  background-image: url(${({ bg }) => bg});
  color: ${({ theme }) => theme.color.white};
  height: 801px;
  /* used to remove the 1px white border */
  margin-top: -1px;
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

  > h1,
  h2 {
    margin: 0;
  }
`;

const HeroBadge = styled.img`
  align-self: center;
  justify-self: center;
  grid-area: badge;
`;

const SectionHeading = styled.h1`
  align-self: center;
  font-family: Helvetica;
  font-size: 80px;
  font-weight: bold;
  grid-area: heading;
  letter-spacing: 12.41px;
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

const Hero = ({
  background,
  badge,
  code,
  cornerIcon,
  cornerText,
  description,
  linksArray
}) => (
  <>
    <HeroContainer bg={background}>
      <Corner>
        <CornerText>{cornerText}</CornerText>
        <CornerF src={cornerIcon} />
      </Corner>
      <CenterWrapper>
        <HeroBadge src={badge} />
        <SectionHeading>VICTORY</SectionHeading>
        <SectionSubHeading>{description}</SectionSubHeading>
        <GetStarted>{code}</GetStarted>
      </CenterWrapper>
      <LinkContainer>
        {linksArray.map(a => (
          <LinkItem key={a.text}>{a.text}</LinkItem>
        ))}
      </LinkContainer>
    </HeroContainer>
    <HeroDemo />
  </>
);

const linkPropType = PropTypes.shape({
  text: PropTypes.string,
  location: PropTypes.string
});

Hero.propTypes = {
  background: PropTypes.string,
  badge: PropTypes.string,
  code: PropTypes.string,
  cornerIcon: PropTypes.string,
  cornerText: PropTypes.string,
  description: PropTypes.string,
  link: linkPropType,
  linksArray: PropTypes.arrayOf(linkPropType)
};

export default Hero;
