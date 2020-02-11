import React from "react";
// import PropTypes from "prop-types";

// VComponents
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis
} from "victory";
import styled from "styled-components";
import importedTheme from "../../styles/theme";

const HeroDemoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.deepBrown};
  height: 200px;
  display: none;
  font-size: 3rem;
  @media ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`;

const data = [
  { x: 1, y: 0 },
  { x: 2, y: 5 },
  { x: 3, y: 9 },
  { x: 4, y: 4 },
  { x: 5, y: 9 },
  { x: 6, y: 7 },
  { x: 7, y: 14 },
  { x: 8, y: 15 },
  { x: 9, y: 21 },
  { x: 10, y: 22 },
  { x: 11, y: 16 },
  { x: 12, y: 14 },
  { x: 13, y: 18 },
  { x: 14, y: 26 },
  { x: 15, y: 14 },
  { x: 16, y: 16 },
  { x: 17, y: 23 },
  { x: 18, y: 21 },
  { x: 19, y: 25 },
  { x: 20, y: 21 },
  { x: 21, y: 25 },
  { x: 22, y: 19 },
  { x: 23, y: 25 },
  { x: 24, y: 21 },
  { x: 25, y: 18 },
  { x: 26, y: 14 },
  { x: 27, y: 16 },
  { x: 28, y: 22 },
  { x: 29, y: 20 },
  { x: 30, y: 23 },
  { x: 31, y: 19 },
  { x: 32, y: 20 },
  { x: 33, y: 17 },
  { x: 34, y: 19 },
  { x: 35, y: 18 },
  { x: 36, y: 20 },
  { x: 37, y: 23 },
  { x: 38, y: 24 },
  { x: 39, y: 18 },
  { x: 40, y: 13 },
  { x: 41, y: 15 },
  { x: 42, y: 23 },
  { x: 43, y: 21 },
  { x: 44, y: 20 },
  { x: 45, y: 15 },
  { x: 46, y: 13 },
  { x: 47, y: 11 },
  { x: 48, y: 10 },
  { x: 49, y: 19 },
  { x: 50, y: 23 },
  { x: 51, y: 17 }
];

const HeroDemo = () => (
  <HeroDemoContainer>
    <VictoryChart
      height={250}
      width={1600}
      style={{
        parent: {
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem"
        }
      }}
    >
      <VictoryLabel text="label test" textAnchor="start" />
      <VictoryLine
        data={data}
        style={{
          data: { stroke: importedTheme.color.white, strokeWidth: 4 }
        }}
      />
      <VictoryScatter
        data={data.filter(d => d.x === 51)}
        size={5}
        style={{
          data: { fill: importedTheme.color.white },
          labels: {
            fontSize: 25,
            fill: importedTheme.color.white
          }
        }}
        labels={["490 COMMITS"]}
        labelComponent={<VictoryLabel x={1640} y={120} />}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={() => ""}
        style={{ axis: { stroke: "none" } }}
        label="test axis"
      />
      <VictoryAxis
        maxDomain={{ x: 3 }}
        tickFormat={() => ""}
        // style={{ axis: { stroke: "none" } }}
      />
    </VictoryChart>
  </HeroDemoContainer>
);

export default HeroDemo;
