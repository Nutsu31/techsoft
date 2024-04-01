import React from "react";
import { CgIfDesign } from "react-icons/cg";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import Button from "../ui/Buttons";

const LongBanner = ({
  img,
  title,
  subTitle,
  cardProps = [],
}: {
  img: string;
}) => {
  return (
    <>
      <div className="relative h-56 p-4 flex flex-col items-center justify-center gap-4">
        <div className="w-full h-56 bg-gradient-to-r from-lime-400 to-lime-500 rounded brightness-50 flex flex-col absolute z-[-100] top-0 left-0"></div>
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white ">{subTitle}</p>
      </div>
      <div
        className={`border border-stone-800 grid grid-cols-1 justify-between gap-4 w-full p-8 md:grid-cols-2 lg:grid-cols-3 grid-rows-${
          cardProps.length / 2
        }`}
      >
        {cardProps.map((item) => (
          <div className="self-end flex flex-col gap-8 w-full mt-4 pb-4">
            <div className="w-16 h-16 bg-stone-800 rounded flex items-center justify-center ">
              {item.icon}
            </div>
            <h3 className="text-white text-3xl font-bold">{item.title}</h3>
            <p className="text-stone-400">{item.sub}</p>
            <Button
              className="bg-stone-800 hover:bg-lime-500 transition duration-300 ease-in-out"
              variant="solid"
            >
              More
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LongBanner;
