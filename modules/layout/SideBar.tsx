"use client";

import { sideMenuTabs } from "@/config";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserMiniProfileMenu } from "../shared/components/UserMiniProfileMenu";

export const SideBar = () => {
  const activeTab = usePathname()?.split("/")?.[1];

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen border-r bg-khaki-50 border-black "
      aria-label="Sidebar"
    >
      <div className="h-full">
        <Image
          className="m-auto pt-8 pb-14"
          src={"/logo.png"}
          alt={"Logo"}
          width={128}
          height={81}
          priority
        />
        <ul className=" font-medium">
          {sideMenuTabs.map((tab) => {
            const isSelectedTab = tab.path === activeTab;

            return (
              <li key={tab.path}>
                <Link
                  href={`/${tab.path}`}
                  className={`flex items-center text-black group mb-[1px] ${
                    isSelectedTab
                      ? "border border-black border-l-8 border-l-blue-300 border-r-0"
                      : "border border-transparent border-l-8 border-l-transparent border-r-0 hover:border-black hover:border-l-8 hover:border-l-blue-300 hover:border-r-0"
                  }`}
                >
                  <div
                    className={`group-hover:border-l group-hover:border-black h-12 mr-4 ${
                      isSelectedTab ? "border-l border-black " : ""
                    }`}
                  />

                  <Image
                    src={tab.icon}
                    alt={"dashboard"}
                    width={20}
                    height={20}
                  />
                  <span
                    className={`ml-3  transition ease-in-out delay-100 ${
                      !isSelectedTab
                        ? "group-hover:-translate-x-1 text-khaki-800"
                        : "text-khaki-1000"
                    }`}
                  >
                    {tab.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <UserMiniProfileMenu />
      </div>
    </aside>
  );
};
