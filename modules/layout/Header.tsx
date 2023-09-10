import { SearchField } from "../shared/components/FormFields/SearchField";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="p-5 bg-khaki-50 border-b border-black flex items-center justify-between">
      <h1 className="text-xl font-medium">Company Management</h1>

      <div className="flex items-center gap-4">
        <SearchField variant="dark" />
        <div className="border-l-2 border-red-1000 h-12 ml-2" />

        <div className="relative">
          <Image
            src={"/icons/notification-bell.svg"}
            alt={"Logo"}
            width={28}
            height={28}
            priority
          />
          <div className="absolute -right-1 -top-3 bg-red-500 min-w-[20px] text-white text-sm opacity-90 flex items-center justify-center rounded-md">
            4
          </div>
        </div>
      </div>
    </div>
  );
};
