import React from "react";
import PropTypes from "prop-types";
import { Link, Prefetch } from "react-static";
import styled from "styled-components";
import SVG from "react-inlinesvg";

// ommon
import config from "../../static-config-parts/site-data";
import Logo from "../formidable-landers/src/assets/logo.svg";

const VictoryHeader = () => {
  return (
    <Header>
      <VictoryHeading>Victory</VictoryHeading>
      <LinkContainer>
        <Link to="/about/">About</Link>
        <Link to="/docs/">Docs</Link>
        <Prefetch path="/gallery">
          <Link to="/gallery/">Gallery</Link>
        </Prefetch>
        {config.projectLinks.map(link => (
          <a key={link.url} href={link.url}>
            {link.label}
          </a>
        ))}
      </LinkContainer>
      <FormidableLogo src={Logo} />
    </Header>
  );
};

VictoryHeader.propTypes = {
  home: PropTypes.bool
};

VictoryHeader.defaultProps = {
  home: false
};

export default VictoryHeader;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.14);
  @media (min-width: 760px) {
    padding: 0 ${props => props.theme.gutter};
  }
`;

const VictoryHeading = styled.h1`
  margin: ${props => props.theme.gutterSmall} 0;
`;

const LinkContainer = styled.div`
  display: flex;
  > a {
    margin-left: ${props => props.theme.gutterSmall};
    text-transform: uppercase;
  }
`;

const FormidableLogo = styled(SVG)`
  width: 9rem;
  height: 2rem;
  margin-left: auto;
`;
