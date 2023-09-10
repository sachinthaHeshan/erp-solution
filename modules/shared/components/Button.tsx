import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-40 text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-[4px] text-xs px-5  h-12"
    >
      {children}
    </button>
  );
};
