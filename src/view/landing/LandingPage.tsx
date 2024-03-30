import Hero from "../../assets/hero.png";
import React from "react";
import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
const bannerTitle = `TECH SOFT as a Software Development Company
that will Work`;
const LandingPage = () => {
  return (
    <>
      <Banner img={Hero} title={bannerTitle} />
      <TechStack />
    </>
  );
};

export default LandingPage;
