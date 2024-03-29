export type DrawerPropTypes = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string | React.ReactNode;
};
