import { ReactElement } from "react";

export type ButtonPropTypes = {
  children: ReactElement | string;
  className: string;
  size: string;
  icon: ReactElement;
  color: string;
  shape: string;
  block: string;
  active: boolean;
  variant: string;
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
};

export type ButtonColorTypes = {
  bgColor: string;
  hoverColor: string;
  activeColor: string;
  textColor: string;
};
