import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "./styles";
import importedTheme from "../../styles/theme";
import PropTypes from "prop-types";
const stripeStyle = css`
  content: "";
  display: block;
  height: ${({ theme }) => `calc(${theme.layout.stripesWidth} / 2)`};
  width: 100%;
  background-color: ${({ bg }) => bg};
`;

const GetStartedContainer = styled.section`
  background-color: #ff684f;
  box-sizing: content-box;
  color: ${({ theme }) => theme.color.white};
  padding: 5rem 0;
  text-align: center;
`;

const Stripe = styled.div`
  ${stripeStyle}
`;

const SectionHeading = styled.h2`
  margin: 0;
`;

const SectionDescription = styled.p`
  margin: 0;
`;

const GetStarted = ({ description, link }) => {
  return (
    <>
      <GetStartedContainer>
        <SectionHeading>Get Started</SectionHeading>
        <SectionDescription>{description}</SectionDescription>
        <LinkButton to={link.location} color={importedTheme.color.darkBrown}>
          {link.text}
        </LinkButton>
      </GetStartedContainer>
      <Stripe bg={importedTheme.color.brown} />
      <Stripe bg={importedTheme.color.otherBrown} />
    </>
  );
};

GetStarted.propTypes = {
  description: PropTypes.string,
  link: PropTypes.shape({ text: PropTypes.string, location: PropTypes.string })
};

export default GetStarted;
