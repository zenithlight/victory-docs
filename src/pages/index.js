import React from "react";
import Guides from "../partials/home/guides";
import Companies from "../partials/home/companies";
import Hero from "../partials/home/hero";
import Features from "../partials/home/features";
import styled from "styled-components";
import Footer from "../partials/footer";

const IndexWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;

const Index = () => (
  <IndexWrapper>
    <Hero />
    <Features />
    <Companies />

    {/* <Guides /> */}
    <Footer />
  </IndexWrapper>
);

export default Index;
