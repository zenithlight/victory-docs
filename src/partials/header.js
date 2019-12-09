import React, { useState } from "react";
import { Link, Prefetch, withRouteData } from "react-static";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

import config from "../../static-config-parts/site-data";
import logo from "../formidable-landers/src/assets/logo.svg";
import icon from "../formidable-landers/src/assets/Formidable-Icon-Black.svg";
import menuButton from "../../static/burger.svg";

const VictoryHeader = ({ history }) => {
  const [openState, setOpenState] = useState(false);
  const { location } = history;
  return (
    <Header>
      <DropDown>
        <button
          onClick={() => setOpenState(!openState)}
          type="button"
          name={`Link dropdown ${openState ? "open" : "close"}`}
        >
          <DropDownBurger src={menuButton} />
        </button>
        {openState && (
          <DropDownContent>
            <Prefetch path="/about">
              <StyledLink
                matches={location.pathname.includes("about")}
                to="/about/"
              >
                About
              </StyledLink>
            </Prefetch>
            <Prefetch path="/docs">
              <StyledLink
                matches={location.pathname.includes("docs")}
                to="/docs/"
              >
                Docs
              </StyledLink>
            </Prefetch>
            <Prefetch path="/guides">
              <StyledLink
                matches={location.pathname.includes("guides")}
                to="/guides/"
              >
                Guides
              </StyledLink>
            </Prefetch>
            <Prefetch path="/gallery">
              <StyledLink
                matches={location.pathname.includes("gallery")}
                to="/gallery/"
              >
                Gallery
              </StyledLink>
            </Prefetch>
            {config.projectLinks.map(link => (
              <StyledA key={link.url} href={link.url}>
                {link.label}
              </StyledA>
            ))}
            <Prefetch path="/faq">
              <StyledLink
                matches={location.pathname.includes("faq")}
                to="/faq/"
              >
                FAQs
              </StyledLink>
            </Prefetch>
          </DropDownContent>
        )}
      </DropDown>
      <VictoryHeading>VICTORY</VictoryHeading>
      <LinkContainer>
        <Prefetch path="/about">
          <StyledLink
            matches={location.pathname.includes("about")}
            to="/about/"
          >
            About
          </StyledLink>
        </Prefetch>
        <Prefetch path="/docs">
          <StyledLink matches={location.pathname.includes("docs")} to="/docs/">
            Docs
          </StyledLink>
        </Prefetch>
        <Prefetch path="/guides">
          <StyledLink
            matches={location.pathname.includes("guides")}
            to="/guides/"
          >
            Guides
          </StyledLink>
        </Prefetch>
        <Prefetch path="/gallery">
          <StyledLink
            matches={location.pathname.includes("gallery")}
            to="/gallery/"
          >
            Gallery
          </StyledLink>
        </Prefetch>
        {config.projectLinks.map(link => (
          <StyledA key={link.url} href={link.url}>
            {link.label}
          </StyledA>
        ))}
        <Prefetch path="/faq">
          <StyledLink matches={location.pathname.includes("faq")} to="/faq/">
            FAQs
          </StyledLink>
        </Prefetch>
      </LinkContainer>
      <FormidableLogoA href="https://formidable.com/">
        <Logo src={logo} />
        <Icon src={icon} />
      </FormidableLogoA>
    </Header>
  );
};

VictoryHeader.propTypes = {
  history: Object
};

export default withRouteData(VictoryHeader);

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.14);
  z-index: 1;
  @media (min-width: ${props => props.theme.tablet}) {
    padding: 0 ${props => props.theme.gutter};
  }
  height: 3rem;
`;

const VictoryHeading = styled.h1`
  margin: 1rem 0;
  font-size: 2rem;
  margin-right: ${props => props.theme.gutterSmall};
  font-weight: bold;
  letter-spacing: 4.34px;
`;

const DropDown = styled.div`
  margin: 0 ${props => props.theme.gutterSmall};
  position: relative;
  @media (min-width: ${props => props.theme.tablet}) {
    display: none;
  }
`;

const DropDownBurger = styled(SVG)`
  display: flex;
`;

const DropDownContent = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 6rem;
  padding: ${props => props.theme.gutterSmall};
  > a {
    margin-bottom: ${props => props.theme.gutterSmall};
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  color: #4c2e29;
  ${props =>
    props.matches &&
    css`
      color: #ff684f;
      font-weight: bold;
    `}
`;

const StyledA = styled.a`
  color: #4c2e29;
`;

const FormidableLogoA = styled.a`
  margin-left: auto;
  margin-right: ${props => props.theme.gutterSmall};
  color: black;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Logo = styled(SVG)`
  display: none;
  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    align-items: center;
    height: 80%;
  }
`;

const Icon = styled(SVG)`
  display: flex;
  height: 100%;
  align-items: center;
  @media (min-width: ${props => props.theme.tablet}) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    > a {
      margin-left: ${props => props.theme.gutterSmall};
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`;
