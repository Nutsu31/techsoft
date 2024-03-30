import NavbarList from "./NavbarList";
import Card from "../../../components/ui/Card/Card";
import Button from "../../../components/ui/Buttons";
import Logo from "../../../components/ui/Logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { useState } from "react";

const Footer = () => {
  const handleOpenSocialNetwork = (link: string) => {
    window.open(link);
  };
  const [activeRoute, setActiveRoute] = useState("/");

  const handleActiveRoute = (route: string) => {
    setActiveRoute(route);
  };
  return (
    <>
      <div className="pb-4 lg:flex items-center justify-between border-t pt-8 border-stone-800">
        <div className="p-4 border-b border-stone-800">
          <Logo className="flex flex-col lg:flex-row" />
        </div>
        <div className="h-16 flex items-center justify-center my-8">
          <NavbarList
            className="flex-warp"
            active={activeRoute}
            handleActive={handleActiveRoute}
          />
        </div>
        <div>
          <Card className="flex flex-col items-center justify-center gap-2 p-2 border-stone-800 lg:flex-row gap-4">
            <p className="text-white font-bold">Stay Connected</p>
            <div className="flex gap-2">
              <Button
                variant="twoTone"
                size="lg"
                onClick={() =>
                  handleOpenSocialNetwork(
                    "https://www.facebook.com/profile.php?id=100094129689669"
                  )
                }
                className="bg-stone-800 rounded-lg hover:bg-stone-600 transition duration-300 ease-in-out"
                icon={<FaFacebook color="rgb(132 204 22)" />}
              />
              <Button
                variant="twoTone"
                size="lg"
                className="bg-stone-800 rounded-lg hover:bg-stone-600 transition duration-300 ease-in-out"
                icon={<FaInstagram color="rgb(132 204 22)" />}
              />
              <Button
                variant="twoTone"
                size="lg"
                onClick={() =>
                  handleOpenSocialNetwork(
                    "https://www.linkedin.com/company/99972064/admin/feed/posts/"
                  )
                }
                className="bg-stone-800 rounded-lg hover:bg-stone-600 transition duration-300 ease-in-out"
                icon={<FaLinkedin color="rgb(132 204 22)" />}
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 m-10 lg:flex-row m-4 pb-6">
        <div className="flex items-center gap-2 ">
          <MdEmail size={20} color="rgb(132 204 22)" />
          <p className="text-white">hello@squareup.com</p>
        </div>
        <div className="flex items-center gap-2 ">
          <MdPhone size={20} color="rgb(132 204 22)" />
          <p className="text-white">+995 598 79 47 87</p>
        </div>
        <div className="flex items-center gap-2 ">
          <MdLocationPin size={20} color="rgb(132 204 22)" />
          <p className="text-white">Tbilisi, Georgia</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
