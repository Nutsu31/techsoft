import Button from "../../../components/ui/Buttons";
import { BiMenu } from "react-icons/bi";
import NavbarList from "./NavbarList";
import Logo from "../../../components/ui/Logo/Logo";
import { useState } from "react";
import Drawer from "../../../components/ui/Drawer";
import Card from "../../../components/ui/Card";
import MiniNavbar from "./MiniNavbar";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <div className="flex items-center justify-between pt-10 px-2">
      <Logo />
      <div className="hidden md:block">
        <NavbarList />
      </div>
      <div className="md:hidden">
        <Button
          onClick={handleOpenMenu}
          variant="twoTone"
          size="md"
          className="bg-stone-700 rounded hover:bg-lime-500 transition duration-300 ease-in-out"
          icon={<BiMenu color="light-green" size={20} />}
        />
      </div>

      <Drawer isOpen={isOpenMenu} setIsOpen={handleCloseMenu} title="MENU">
        <Card className="border-stone-800 p-2">
          <MiniNavbar />
        </Card>
      </Drawer>
      <div className="hidden md:block">
        <Button variant="twoTone" size="md" className="bg-lime-500 rounded">
          <span className="text-white font-bold">Contact US</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
