import Button from "../../../components/ui/Buttons";
import { BiMenu } from "react-icons/bi";
import NavbarList from "./NavbarList";
import Logo from "../../../components/ui/Logo/Logo";
import { useState } from "react";
import Drawer from "../../../components/ui/Drawer";
import Card from "../../../components/ui/Card";
import MiniNavbar from "./MiniNavbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const [activeRoute, setActiveRoute] = useState("/");

  const handleActiveRoute = (route: string) => {
    setActiveRoute(route);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const handleNavigate = () => {
    navigate("/contact-us");
  };
  return (
    <div className="flex items-center justify-between pt-10 px-2 border-b pb-8 border-stone-800">
      <Logo />
      <div className="hidden md:block">
        <NavbarList
          active={activeRoute}
          handleActive={handleActiveRoute}
          className=""
        />
      </div>
      <div className="md:hidden">
        <Button
          onClick={handleOpenMenu}
          variant="twoTone"
          size="md"
          className="p-2 bg-stone-700 rounded hover:bg-stone-800 transition duration-300 ease-in-out"
          icon={<BiMenu color="rgb(132 204 22)" size={24} />}
        />
      </div>

      <Drawer isOpen={isOpenMenu} setIsOpen={handleCloseMenu} title="MENU">
        <Card className="border-stone-800 p-2">
          <MiniNavbar onPathChange={handleCloseMenu} />
        </Card>
      </Drawer>
      <div className="hidden md:block">
        <Button
          variant="twoTone"
          size="md"
          onClick={handleNavigate}
          className="bg-lime-500 rounded hover:bg-stone-800 transition duration-300 ease-in-out"
        >
          <span className="text-white font-bold">Contact US</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
