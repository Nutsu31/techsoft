import React from "react";
import { FaShop } from "react-icons/fa6";

const Shop = () => {
  return (
    <div>
      <h1 className="text-white font-bold text-6xl pt-24 py-2 flex gap-4">
        Coming Soon...
      </h1>

      <FaShop
        color="rgb(132 204 22)"
        size={350}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: -1,
          opacity: 0.2,
        }}
      />
    </div>
  );
};

export default Shop;
