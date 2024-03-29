import { ReactElement } from "react";

const Card = ({
  className,
  children,
}: Partial<{
  className: string;
  children: ReactElement[];
}>) => {
  return <div className={"border m-2 rounded " + className}>{children}</div>;
};

export default Card;
