import React from "react";
import PropTypes from "prop-types";
import { ProjectBadge } from "formidable-oss-badges";
import styled from "styled-components";
import Button from "./styles/home-button";

const OuterWrapper = styled.div`
  background-color: #000000;
  background-size: 100% 100%;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OSSCard = styled.div`
  margin: 0 auto 4rem;
  max-width: 43rem;
  position: relative;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: calc(1 / 2 * 100% - (1 - 1 / 2) * 80px);
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 6rem;
  }
`;

const OSSImage = styled.img`
  left: 0;
  position: relative;
  top: 2rem;
  width: 18rem;
  max-width: none;
  padding: 13% 12%;
  @media (min-width: 1024px) {
    padding: 14px;
    width: 14rem;
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

const StyledProjectBadge = styled(ProjectBadge)`
  left: 0;
  position: relative;
  top: 2rem;
  width: 18rem;
  @media (min-width: 1024px) {
    width: 14rem;
  }
`;

const OSSCopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-left: 1rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
  }
`;

const MoreOSS = ({ ossArray }) => (
  <OuterWrapper>
    <div>
      <h2>More Open Source from Formidable</h2>
      {ossArray.map(card => (
        <OSSCard key={card.title}>
          <OSSLink href={card.link}>
            {card.hasOwnLogo ? (
              <OSSImage src={card.logo} />
            ) : (
              <StyledProjectBadge
                color={card.color}
                number={card.number}
                abbreviation={card.abbreviation}
                description={card.title}
              />
            )}
          </OSSLink>
          <OSSCopyContainer>
            <OSSLink href={card.link}>
              <h2>{card.title}</h2>
            </OSSLink>
            <p>{card.description}</p>
          </OSSCopyContainer>
        </OSSCard>
      ))}
      <Button light="true" to="https://formidable.com/open-source/">
        View All
      </Button>
    </div>
  </OuterWrapper>
);

MoreOSS.propTypes = {
  ossArray: PropTypes.array
};

export default MoreOSS;
