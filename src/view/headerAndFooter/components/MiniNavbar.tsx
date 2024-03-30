import { useEffect, useMemo } from "react";
import { FaHome, FaServicestack } from "react-icons/fa";
import { FaShop, FaUser } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Buttons";

const MiniNavbar = ({ onPathChange }: { onPathChange: () => void }) => {
  const navigate = useNavigate();
  const list = useMemo(() => {
    return [
      {
        label: "Home",
        link: "/",
        icon: <FaHome size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Services",
        link: "/services",
        icon: <FaServicestack size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Shop",
        link: "/shop",
        icon: <FaShop size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Works",
        link: "/works",
        icon: <MdWork size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "About",
        link: "/about-us",
        icon: <SiAboutdotme size={24} color="rgb(132 204 22)" />,
      },
      {
        label: "Careers",
        link: "/careers",
        icon: <FaUser size={24} color="rgb(132 204 22)" />,
      },
    ];
  }, []);

  const handleNavigate = () => {
    navigate("/contact-us");
  };

  const { pathname } = useLocation();
  useEffect(() => {
    onPathChange();
  }, [pathname]);

  return (
    <>
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
      <Button
        size="md"
        variant="twoTone"
        onClick={handleNavigate}
        className="bg-lime-500 rounded w-64 hover:bg-stone-700 text-white font-bold transition duration-300 ease-in-out my-4 ml-2 "
        color="rgb(132 204 22)"
      >
        <span>Contact US</span>
      </Button>
    </>
  );
};

export default MiniNavbar;
