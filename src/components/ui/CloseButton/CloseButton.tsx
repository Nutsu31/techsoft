import React from "react";
import { CloseButtonPropsType } from "./types";
import { MdClose } from "react-icons/md";

const CloseButton = ({ onClick }: CloseButtonPropsType) => {
  return (
    <button className="" onClick={onClick}>
      <MdClose />
    </button>
  );
};

export default CloseButton;
