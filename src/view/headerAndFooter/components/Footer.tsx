import NavbarList from "./NavbarList";
import Card from "../../../components/ui/Card/Card";
import Button from "../../../components/ui/Buttons";
import Logo from "../../../components/ui/Logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pb-4">
      <div className="p-4 border-b border-stone-800">
        <Logo className="flex flex-col" />
      </div>
      <div className="h-16 flex items-center justify-center">
        <NavbarList className="flex-warp" />
      </div>
      <div>
        <Card className="flex flex-col items-center justify-center gap-2 p-2 border-stone-800">
          <p className="text-white font-bold">Stay Connected</p>
          <div className="flex gap-2">
            <Button
              variant="twoTone"
              size="lg"
              className="bg-stone-800 rounded-lg"
              icon={<FaFacebook color="rgb(132 204 22)" />}
            />
            <Button
              variant="twoTone"
              size="lg"
              className="bg-stone-800 rounded-lg"
              icon={<FaInstagram color="rgb(132 204 22)" />}
            />
            <Button
              variant="twoTone"
              size="lg"
              className="bg-stone-800 rounded-lg"
              icon={<FaLinkedin color="rgb(132 204 22)" />}
            />
          </div>
        </Card>
      </div>
      <div className="flex items-center flex-col gap-4 m-10">
        <div className="flex items-center gap-2 ">
          <MdEmail size={20} color="rgb(132 204 22)" />
          <p className="text-white">hello@squareup.com</p>
        </div>
        <div className="flex items-center gap-2 ">
          <MdPhone size={20} color="rgb(132 204 22)" />
          <p className="text-white">+91 91813 23 2309</p>
        </div>
        <div className="flex items-center gap-2 ">
          <MdLocationPin size={20} color="rgb(132 204 22)" />
          <p className="text-white">Somewhere in the World</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
