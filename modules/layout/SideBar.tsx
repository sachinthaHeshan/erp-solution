"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";

interface SideBarProps {
  children: ReactNode;
}

const tabs = [
  {
    key: "dashboard",
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    key: "people",
    name: "People",
    icon: "/icons/people.svg",
  },
  {
    key: "documents",
    name: "Documents",
    icon: "/icons/documents.svg",
  },
  {
    key: "caseStudies",
    name: "Case Studies",
    icon: "/icons/case-study.svg",
  },
];

export const SideBar = ({ children }: SideBarProps) => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-khaki-50">
          <Image
            className="m-auto py-6"
            src={"/logo.png"}
            alt={"Logo"}
            width={128}
            height={81}
          />
          <ul className=" font-medium">
            {tabs.map((tab) => {
              const isSelectedTab = tab.key === activeTab;

              return (
                <li key={tab.key}>
                  <a
                    href="#"
                    className={`flex items-center text-black group mb-[1px] ${
                      isSelectedTab
                        ? "border border-black border-l-8 border-l-blue-300 border-r-0"
                        : "border border-transparent border-l-8 border-l-transparent border-r-0 hover:border-black hover:border-l-8 hover:border-l-blue-300 hover:border-r-0"
                    }`}
                    onClick={() => {
                      setActiveTab(tab.key);
                    }}
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
                      className={`ml-3 text-khaki-100 transition ease-in-out delay-100 ${
                        !isSelectedTab ? "group-hover:-translate-x-1" : ""
                      }`}
                    >
                      {tab.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      {children}
    </div>
  );
};
