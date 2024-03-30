import { Route, Routes } from "react-router-dom";
import LandingPage from "./view/landing";
import HeaderAndFooter from "./view/headerAndFooter/HeaderAndFooter";
import Services from "./view/services";
import Shop from "./view/shop";
import Works from "./view/works";
import AboutUs from "./view/aboutUs";
import Careers from "./view/careers";
import ContactUs from "./view/contacts";
import PageNotFound from "./view/404";

const Root = () => {
  return (
    <Routes>
      <Route element={<HeaderAndFooter />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/process" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Root;
