import React, { useState } from "react";
import { Link } from "react-static";
import { Wrapper } from "../../components/wrapper";
import styled from "styled-components";
import badge from "../../static/badge.svg";

const WrapperStyled = styled(Wrapper)`
  z-index: 1;
`;

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  position: relative;
  text-align: left;
  width: 100%;
  background: #bc5240;
  padding: 4rem 1.25rem 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.1em;
  margin: 2.5rem 0 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const HeroBody = styled.p`
  letter-spacing: 0.08em;
  font-size: 1rem;
  line-height: 1.67;
  text-align: left;
  color: #fff;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 768px) {
    margin: 0 0 6rem;
    max-width: 50rem;
  }
`;

const HeroLogoContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 6rem 0;
  height: 160px;
  @media (min-width: 768px) {
    height: auto;
    display: block;
    width: inherit;
    margin: 0;
  }
`;

const HeroLogo = styled.img`
  width: 100%;
  max-width: 20rem;
  margin: auto;
  @media (min-width: 768px) {
    left: -3rem;
  }
`;

const HeroButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4.5rem 0 2.5rem 0;
  max-width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    align-items: center;
    width: 30rem;
  }
`;
const HeroNPMWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (min-width: 1024px) {
    width: 28rem;
  }
`;

const HeroNPMCopy = styled.p`
  flex: 1;
  height: 2rem;
  color: #4c2e29;
  background-color: #fff;
  color: black;
  text-align: left;
  padding: 0 0.8rem;
  line-height: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.2px;
  margin: 0;
`;
const HeroNPMButton = styled.button`
  height: 2rem;
  font-size: 0.8rem;
  line-height: 2rem;
  letter-spacing: 1px;
  padding: 0 1rem;
  background-color: #ff684f;
  color: #4c2e29;
  border: 0;
  text-transform: uppercase;
  cursor: copy;
`;

export const HeroDocsButton = styled(Link)`
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  background-color: #ff684f;
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4c2e29;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    width: 30rem;
  }
  @media (min-width: 1024px) {
    width: 18rem;
  }
`;

const HeroNav = styled.div`
  width: 100%;
  border-top: 2px solid #ff684f;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 1rem 0;
  width: 100%;

  & span {
    margin-right: 0.5rem;
    font-size: 0.88rem;
    text-transform: uppercase;
  }

  & svg {
    width: auto;
    height: 1.5rem;
    transform: rotate(${({ expanded }) => (expanded ? "180deg" : "0deg")});
  }
`;

const NavItems = styled.ul`
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  align-items: center;

  & li {
    display: inline-block;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li a {
    color: white;
    display: inline-block;
    font-size: 0.88rem;
    text-transform: uppercase;
  }
`;

const copyFallBack = () => {
  const copyTextArea = document.createElement("textArea");
  copyTextArea.value = "npm install victory";

  document.body.appendChild(copyTextArea);

  copyTextArea.focus();
  copyTextArea.select();
  document.execCommand("copy");
  copyTextArea.remove();
};

const Hero = function() {
  const [animating, setAnimating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const handleCopy = e => {
    if (!navigator.clipboard) {
      copyFallBack();
      e.preventDefault();
      return;
    }
    navigator.clipboard.writeText("npm install victory");
  };

  return (
    <WrapperStyled noPadding>
      <HeroContent>
        <HeroLogoContainer>
          <HeroLogo src={badge} />
        </HeroLogoContainer>
        <HeroTitle>victory</HeroTitle>
        <HeroBody>
          React.js components for modular charting and data visualization.
        </HeroBody>
        <HeroButtonsWrapper>
          <HeroNPMWrapper>
            <HeroNPMCopy>npm install victory</HeroNPMCopy>
            <HeroNPMButton onClick={handleCopy}>copy</HeroNPMButton>
          </HeroNPMWrapper>
          <HeroDocsButton prefetch to="/docs">
            Documentation
          </HeroDocsButton>
        </HeroButtonsWrapper>
        <HeroNav>
          <NavButton
            onClick={() => setNavExpanded(!navExpanded)}
            expanded={navExpanded}
          >
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </NavButton>
          <NavItems expanded={navExpanded}>
            <li>
              <Link prefetch to="/about">
                About
              </Link>
            </li>
            <li>
              <Link prefetch to="/docs">
                Docs
              </Link>
            </li>
            <li>
              <Link prefetch to="/guides">
                Guides
              </Link>
            </li>
            <li>
              <Link prefetch to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <a title="Support" href="https://spectrum.chat/victory">
                Support
              </a>
            </li>
            <li>
              <a
                title="GitHub"
                href="https://github.com/FormidableLabs/victory"
              >
                GitHub
              </a>
            </li>
            <li>
              <Link prefetch to="/faq">
                Faqs
              </Link>
            </li>
          </NavItems>
        </HeroNav>
      </HeroContent>
    </WrapperStyled>
  );
};

export default Hero;
