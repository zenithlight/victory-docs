import React from "react";
import Benefits from "../partials/home/benefits";
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
    <section className="Home playgroundsMaxHeight">
      <Hero />
      <Features />
      <Companies />

      <Benefits />
      <Footer />
    </section>
  </IndexWrapper>
);

export default Index;
