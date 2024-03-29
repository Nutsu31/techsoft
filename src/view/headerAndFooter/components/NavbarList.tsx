import { useMemo } from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ className }: Partial<{ className: string }>) => {
  const list = useMemo(() => {
    return [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Shop", link: "/shop" },
      { label: "Works", link: "/works" },
      { label: "About", link: "/about-us" },
      { label: "Careers", link: "/careers" },
    ];
  }, []);

  return (
    <ul className={"flex items-center justify-center gap-4 " + className}>
      {list.map((item, i) => (
        <Link to={item.link} key={Math.random() * i}>
          <li className=" text-white p-2  rounded-lg hover:bg-lime-500 transition duration-300 ease-in-out">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;
