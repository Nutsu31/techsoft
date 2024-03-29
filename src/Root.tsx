import { Route, Routes } from "react-router-dom";
import LandingPage from "./view/landing";
import HeaderAndFooter from "./view/headerAndFooter/HeaderAndFooter";
import Services from "./view/services";
import Shop from "./view/shop";
import Works from "./view/works";
import AboutUs from "./view/aboutUs";
import Careers from "./view/careers";

const Root = () => {
  return (
    <Routes>
      <Route element={<HeaderAndFooter />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/services" index element={<Services />} />
        <Route path="/shop" index element={<Shop />} />
        <Route path="/works" index element={<Works />} />
        <Route path="/about-us" index element={<AboutUs />} />
        <Route path="/careers" index element={<Careers />} />
      </Route>
    </Routes>
  );
};

export default Root;
