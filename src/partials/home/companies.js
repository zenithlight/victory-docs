import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Common
import Icon from "../icon";
// Assets
import VIACOM from "../../../static/logos/logo-viacom.svg";
import FIVETHIRTYEIGHT from "../../../static/logos/logo-fivethirtyeight.svg";
import USAFACTS from "../../../static/logos/logo-usafacts.svg";
import AIRBNB from "../../../static/logos/logo-airbnb.svg";
import REDFIN from "../../../static/logos/logo-redfin.svg";
import TUNE from "../../../static/logos/logo-tune.svg";
import ZILLOW from "../../../static/logos/logo-zillow.svg";
import BENAROYA from "../../../static/logos/logo-benaroya.png";
import styled from "styled-components";
import importedTheme from "../../styles/theme";
import { HomeButton } from "./styles";

const CompaniesWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 5rem 0;
`;

const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.darkBrown};
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.58;
  letter-spacing: 0.48px;
  margin: 0;
  text-align: center;
  @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 24px;
  }
`;

const CompaniesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;
  margin: 6rem 0;
  @media ${({ theme }) => theme.mediaQuery.sm} {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 3rem;
    margin: 5rem 10rem;
  }
`;

const CompanyLogo = styled.img`
  align-self: center;
  justify-self: center;
  max-height: 100px;
  max-width: 200px;
  width: 100%;
`;

const Companies = () => (
  <CompaniesWrapper>
    <SectionHeading>A Few of Our Fans</SectionHeading>
    <CompaniesList>
      <CompanyLogo src={AIRBNB} />
      <CompanyLogo src={FIVETHIRTYEIGHT} />
      <CompanyLogo src={REDFIN} />
      <CompanyLogo src={USAFACTS} />
      <CompanyLogo src={VIACOM} />
      <CompanyLogo src={BENAROYA} />
      <CompanyLogo src={ZILLOW} />
      <CompanyLogo src={TUNE} />
    </CompaniesList>
    <Link to="/about#showcase">
      <HomeButton color={importedTheme.color.black}>SEE SHOWCASE</HomeButton>
    </Link>
  </CompaniesWrapper>
);

Companies.propTypes = {
  style: PropTypes.object
};

Companies.defaultProps = {
  style: null
};

export default Companies;
