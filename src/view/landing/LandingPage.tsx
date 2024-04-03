import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
import LongBanner from "../../components/shared/LongBanner";
import { chooseCardProps, serviceCardProps } from "./data";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <TechStack />
      <LongBanner
        cardProps={serviceCardProps}
        title="Our Services"
        rows={1}
        columns={3}
        subTitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <LongBanner
        rows={2}
        columns={2}
        cardProps={chooseCardProps}
        title="Why Choose TechSOFT?"
        subTitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      />
    </>
  );
};

export default LandingPage;
