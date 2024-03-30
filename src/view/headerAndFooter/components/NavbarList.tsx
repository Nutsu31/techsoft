import { useMemo } from "react";
import { Link } from "react-router-dom";

const NavbarList = ({
  className,
  active,
  handleActive,
}: {
  className: string;
  active: string;
  handleActive: (props: string) => void;
}) => {
  const list = useMemo(() => {
    return [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Shop", link: "/shop" },
      { label: "Works", link: "/works" },
      // { label: "About", link: "/about-us" },
      { label: "Careers", link: "/careers" },
    ];
  }, []);

  return (
    <ul
      className={
        "flex items-center justify-center gap-2 flex-wrap " + className
      }
    >
      {list.map((item, i) => (
        <Link to={item.link} key={Math.random() * i}>
          <li
            onClick={() => handleActive(item?.link)}
            className={`text-white p-2 ${
              active === item.link ? "bg-lime-700" : ""
            }  rounded-lg hover:bg-lime-500 transition duration-300 ease-in-out `}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;
