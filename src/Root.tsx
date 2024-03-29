import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./view/landing";
import HeaderAndFooter from "./view/headerAndFooter/HeaderAndFooter";

const Root = () => {
  return (
    <Routes>
      <Route element={<HeaderAndFooter />}>
        <Route path="/" index element={<LandingPage />} />
        {/* <Route path="/" index element={<LandingPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Root;
