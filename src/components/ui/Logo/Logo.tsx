import Button from "../Buttons";
import { FaBox } from "react-icons/fa6";

const Logo = ({ className }: Partial<{ className: string }>) => {
  return (
    <div
      className={
        "flex items-center gap-2 hover:bg-stone-600 transition duration-300 ease-in-out rounded-lg " +
        className
      }
    >
      <Button
        icon={<FaBox size={24} />}
        variant="solid"
        className="bg-lime-500 rounded "
        size="lg"
      />
      <h2 className="text-4xl font-bold text-white">TECH SOFT</h2>
    </div>
  );
};

export default Logo;
