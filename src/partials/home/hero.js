import React from "react";
// Settings
import HeroDemo from "./hero-demo";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LandingSectionContent } from "./styles";

const HeroContainer = styled.section`
  background-image: url(${({ bg }) => bg});
  color: ${({ theme }) => theme.color.white};
  height: 650px;
  /* used to remove the 1px white border */
  margin-top: -1px;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 600px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    height: 690px;
  }
`;

const Corner = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  clip-path: polygon(0 0, 0 100%, 100% 0);
  height: 156px;
  padding: 15px 18px;
  position: absolute;
  width: 126px;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 164px;
    width: 130px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: 26px 30px;
    height: 268px;
    width: 220px;
  }
`;

const CornerText = styled.p`
  color: ${({ theme }) => theme.color.nearBlack};
  font-family: Helvetica;
  font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.57px;
  margin: 0;
  white-space: pre-line;
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 12px;
    letter-spacing: 0.86px;
  }
`;

const CornerF = styled.img`
  color: ${({ theme }) => theme.color.nearBlack};
  height: 43px;
  margin-top: 5px;
  width: 33px;
  @media ${({ theme }) => theme.mediaQuery.md} {
    height: 63px;
    width: 48px;
  }
`;

const CenterWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.red};
  display: grid;

  margin-top: 7rem;
  padding-bottom: 6rem;
  grid-row-gap: 5rem;
  grid-template-areas: "badge" "heading" "subheading" "getstarted";
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  > h1,
  h2 {
    margin: 0;
  }

  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin-top: 14rem;
    grid-template-areas: "badge heading" "badge subheading" "badge getstarted";
    grid-auto-columns: auto;
    grid-column-gap: 5rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    grid-column-gap: 10rem;
    margin-top: 15rem;
    padding-bottom: 4rem;
  }
`;

const HeroBadge = styled.img`
  align-self: center;
  justify-self: center;
  grid-area: badge;
  width: 130px;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    justify-self: left;
    width: 215px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 300px;
  }
`;

const SectionHeading = styled.h1`
  align-self: center;
  justify-self: center;
  font-family: Helvetica;
  font-size: 30px;
  font-weight: bold;
  grid-area: heading;
  letter-spacing: 12.41px;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    font-size: 48px;
    justify-self: left;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 80px;
  }
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
  display: none;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: 10px;
    margin: 3rem auto 0 auto;
    padding: 0 50px;
    width: 637px;
  }
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
      <LandingSectionContent>
        <CenterWrapper>
          <HeroBadge src={badge} />
          <SectionHeading>VICTORY</SectionHeading>
          <SectionSubHeading>{description}</SectionSubHeading>
          <GetStarted>{code}</GetStarted>
        </CenterWrapper>
        <LinkContainer>
          {linksArray.map(link => (
            <LinkItem key={link.text} href={link.location}>
              {link.text}
            </LinkItem>
          ))}
        </LinkContainer>
      </LandingSectionContent>
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
