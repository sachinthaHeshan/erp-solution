import { ReactNode } from "react";

interface DrawerFooterProps {
  children: ReactNode;
  className?: string;
}

export const DrawerFooter = ({ children, className }: DrawerFooterProps) => {
  return (
    <div className={`flex p-4 border-t justify-between ${className}`}>
      {children}
    </div>
  );
};
