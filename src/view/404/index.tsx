import { PiNumberFourDuotone, PiNumberZeroDuotone } from "react-icons/pi";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex gap-4 flex items-center justify-center">
        <PiNumberFourDuotone size={150} color="rgb(132 204 22)" />
        <PiNumberZeroDuotone
          size={150}
          color="rgb(38 38 38)"
          //   className="bg-stone--600"
        />
        <PiNumberFourDuotone size={150} color="rgb(132 204 22)" />
      </div>
      <h1 className="text-white text-8xl font-bold opacity-30">
        PAGE NOT FOUND
      </h1>
    </div>
  );
};

export default PageNotFound;
