import React, { useMemo } from "react";
import { FaHome, FaServicestack } from "react-icons/fa";
import { FaShop, FaUser } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-router-dom";

const MiniNavbar = () => {
  const list = useMemo(() => {
    return [
      {
        label: "Home",
        link: "",
        icon: <FaHome size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Services",
        link: "",
        icon: <FaServicestack size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Shop",
        link: "",
        icon: <FaShop size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Works",
        link: "",
        icon: <MdWork size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "About",
        link: "",
        icon: <SiAboutdotme size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Careers",
        link: "",
        icon: <FaUser size={24} color="rgb(132 204 22)" />,
      },
    ];
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <Link to={item.link} key={item.label}>
          <li className="flex items-center gap-4 text-white mt-4 font-bold p-2 hover:bg-stone-600 transition duration-300 ease-in-out">
            {item.icon}
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MiniNavbar;
