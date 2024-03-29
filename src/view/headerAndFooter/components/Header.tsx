import Button from "../../../components/ui/Buttons";
import { FaBox } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import NavbarList from "./NavbarList";
import Logo from "../../../components/ui/Logo/Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-10 px-2">
      <Logo />
      <div className="hidden md:block">
        <NavbarList />
      </div>
      <div className="md:hidden">
        <Button
          variant="twoTone"
          size="md"
          className="bg-stone-700 rounded hover:bg-lime-500"
          icon={<BiMenu color="light-green" size={20} />}
        />
      </div>
      <div className="hidden md:block">
        <Button variant="twoTone" size="md" className="bg-lime-500 rounded">
          <span className="text-white font-bold">Contact US</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
