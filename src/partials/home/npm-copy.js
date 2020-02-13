import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BounceAnimation } from "./styles/";
import styled from "styled-components";

const HeroNPMWrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    width: 300px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    max-width: 350px;
  }
`;

const HeroNPMCopy = styled.p`
  width: 22rem;
  height: 4rem;
  color: #000;
  background-color: ${({ theme }) => theme.color.white};
  color: black;
  text-align: left;
  padding: 0.33rem 1.5rem;
  line-height: 3.44rem;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
  margin: 0;
  flex: 1 0 auto;
`;

const HeroNPMButton = styled.button`
  width: 8rem;
  height: 4rem;
  background: ${({ theme }) => theme.color.red};
  transition: background 0.4s;
  font-size: 1.4rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #383838;
  border: 0;
  text-transform: uppercase;
  cursor: copy;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

class NpmCopy extends React.Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      copied: false
    };
    this.handleCopy = this.copy.bind(this);
  }

  copy(e) {
    e.preventDefault();
    this.setState({ animating: true, copied: true });
    setTimeout(() => {
      this.setState({ animating: false });
    }, "100");
    setTimeout(() => {
      this.setState({ copied: false });
    }, "3000");
  }

  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <HeroNPMWrapper>
          <HeroNPMCopy>{this.props.text}</HeroNPMCopy>
          <HeroNPMButton onClick={this.handleCopy}>
            <BounceAnimation bouncing={this.state.animating}>
              {this.state.copied ? "Copied" : "Copy"}
            </BounceAnimation>
          </HeroNPMButton>
        </HeroNPMWrapper>
      </CopyToClipboard>
    );
  }
}

NpmCopy.propTypes = {
  text: PropTypes.string
};

export default NpmCopy;
