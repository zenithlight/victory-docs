import React from "react";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

import icon from "../formidable-landers/src/assets/Formidable-Icon-Black.svg";

const Footer = () => (
  <FooterContainer>
    <IconAndContact>
      <a href="https://formidable.com">
        <FooterIcon src={icon} />
      </a>
      <Contact>
        <a href="https://formidable.com/contact/">CONTACT</a>
        <a href="https://formidable.com/careers/">CAREERS</a>
      </Contact>
    </IconAndContact>
    <Blurb>
      A little blurb about Formidable. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Blurb>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: ${props =>
    css`
      ${props.theme.gutter} ${props.theme.gutterLarge}
    `};
  @media (min-width: ${props => props.theme.mobile}) {
    flex-direction: row;
  }
`;

const IconAndContact = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  align-items: center;
  justify-content: space-around;
  padding: ${props => props.theme.gutterSmall} 0;
  width: 100%;
  @media (min-width: ${props => props.theme.mobile}) {
    padding: 0 ${props => props.theme.gutterSmall};
    width: auto;
    justify-content: space-evenly;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;

const FooterIcon = styled(SVG)`
  > svg {
    color: ${props => props.theme.colors.white};
    height: 6rem;
  }
`;

const Blurb = styled.div`
  flex: 3;
  color: ${props => props.theme.colors.white};
`;
