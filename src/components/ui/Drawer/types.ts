export type DrawerPropTypes = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  title?: string | React.ReactNode;
};
