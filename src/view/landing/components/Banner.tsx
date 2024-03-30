import React from "react";
import Gif from "../../../assets/image_processing20191223-14772-143w3xh.gif";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Buttons";
const workingFor = [
  " Startups, ",
  "Enterprise leaders, ",
  "E-Commerce, ",
  "CMS Panels, ",
  "Etc.",
];

const Banner = ({ img, title }) => {
  return (
    <div className="relative h-screen bg-[url('./src/assets/hero.png')] bg-cover bg-no-repeat bg-center lg:h-3/4 ">
      <div className="w-full h-full flex flex-col p-4 gap-4 items-center justify-center px-12 lg:flex-row py-12 justify-evenly">
        <div className="w-full  md:w-3/4 lg:w-4/12">
          <h1 className="text-white font-bold text-3xl p-2">{title}</h1>
          <Card className="border-stone-700 p-4">
            <p className="text-white flex items-center gap-2 flex-wrap">
              For
              {workingFor.map((word, index) => (
                <span key={index} className="p-1 bg-stone-800 rounded">
                  {word}
                </span>
              ))}
            </p>
          </Card>
          <div className="p-2 flex flex-col items-center gap-4 md:flex-row ">
            <Button variant="solid" className="rounded p-2 bg-stone-800">
              Our Works
            </Button>
            <Button variant="solid" className="rounded p-2 bg-lime-500">
              Contact US
            </Button>
          </div>
        </div>
        <div className="hidden p-2 rounded sm:flex w-2/4 md:w-3/4 lg:w-6/12  xl:w-6/12">
          <img src={Gif} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
