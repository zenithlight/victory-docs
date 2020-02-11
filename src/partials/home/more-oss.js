import React from "react";
import PropTypes from "prop-types";
import { ProjectBadge } from "formidable-oss-badges";
import styled from "styled-components";
import {
  LinkButton,
  LandingSectionWrapper,
  LandingSectionContent
} from "./styles";
import importedTheme from "../../styles/theme";

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.58;
  letter-spacing: 0.48px;
  margin: 0;
  text-align: center;
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 24px;
  }
`;

const OSSWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;
  margin: 5rem 0;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 3rem;
  }
`;

const OSSItem = styled.div`
  display: flex;
  justify-self: ${({ index }) => (index % 2 === 0 ? "right" : "left")};
  flex-direction: column;

  > a {
    margin: auto;
  }

  svg,
  img {
    width: 160px;
    @media ${({ theme }) => theme.mediaQuery.md} {
      width: 280px;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: row;
  }
`;

const OSSCopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    justify-content: center;
    text-align: left;
  }
`;

const OSSLink = styled.a`
  & h3 {
    color: white;
  }
  & h3:hover {
    opacity: 0.7;
  }
`;

const OSSTitle = styled.h3`
  font-family: HelveticaNeue;
  font-size: 18px;
  font-weight: bold;
`;

const OSSText = styled.p`
  font-size: 12px;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    font-size: 14px;
  }
`;

const MoreOSS = ({ ossArray, link }) => (
  <LandingSectionWrapper bg="#000">
    <LandingSectionContent color={importedTheme.color.white}>
      <SectionHeading>More Open Source from Formidable</SectionHeading>
      <OSSWrapper>
        {ossArray.map((card, index) => (
          <OSSItem key={card.link} index={index}>
            <OSSLink href={card.link}>
              {card.hasOwnLogo ? (
                <img src={card.logo} />
              ) : (
                <ProjectBadge
                  color={card.color}
                  number={card.number}
                  abbreviation={card.abbreviation}
                  description={card.title}
                />
              )}
            </OSSLink>
            <OSSCopyContainer>
              <OSSLink href={card.link}>
                <OSSTitle>{card.title}</OSSTitle>
              </OSSLink>
              <OSSText>{card.description}</OSSText>
            </OSSCopyContainer>
          </OSSItem>
        ))}
      </OSSWrapper>
      <LinkButton to={link.location}>{link.text}</LinkButton>
    </LandingSectionContent>
  </LandingSectionWrapper>
);

MoreOSS.propTypes = {
  link: PropTypes.shape(),
  ossArray: PropTypes.array
};

export default MoreOSS;
