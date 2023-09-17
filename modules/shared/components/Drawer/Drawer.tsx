import { XCircleIcon } from "@heroicons/react/20/solid";
import { ReactNode, createContext, useEffect, useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  placement?: "right" | "left";
  onClose?: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  headerExtra?: ReactNode;
  persist?: boolean;
  title?: string;
}

export const Drawer = ({
  isOpen,
  placement = "right",
  onClose,
  children,
  footer,
  headerExtra,
  persist,
  title,
}: DrawerProps) => {
  const [isInitiated, setIsInitiated] = useState(false);
  // const [context, setContext] = useState(false);

  useEffect(() => {
    if (persist && isOpen) {
      setIsInitiated(true);
    }
  }, [isOpen]);

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose && onClose();
        }
      }}
      className={`fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur h-screen transition-opacity duration-100 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex flex-col justify-between fixed top-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[600px] ${
          placement === "right" ? "right-0" : "left-0"
        } ${
          isOpen
            ? ""
            : `${
                placement === "right" ? "translate-x-full" : "-translate-x-full"
              }`
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <div>
          <div className="flex  justify-between items-center border-b border-black p-6 text-base font-semibold">
            <h1 className="text-xl">{title}</h1>
            <XCircleIcon
              onClick={() => {
                onClose && onClose();
              }}
              className="h-9 w-9 text-brown-700 hover:text-brown-600"
              aria-hidden="true"
            />
          </div>
          {headerExtra}
          {persist ? isInitiated && children : isOpen && children}
        </div>
        {footer}
      </div>
    </div>
  );
};
