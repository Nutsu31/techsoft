import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const HeaderAndFooter = () => {
  return (
    <div className="h-screen max-w-[1600px] mx-auto my-0  h-12">
      <Header />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HeaderAndFooter;
