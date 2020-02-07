import React from "react";
// import PropTypes from "prop-types";

// VComponents
// import {
//   VictoryArea,
//   VictoryAxis,
//   VictoryChart,
//   VictoryStack,
//   VictoryTheme
// } from "victory";
import styled from "styled-components";

const HeroDemoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.deepBrown};
  height: 200px;
`;

const HeroDemo = () => <HeroDemoContainer />;

export default HeroDemo;
