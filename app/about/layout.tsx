import { SideBar } from "@/modules/layout/SideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collective OS",
  description: "Collective OS",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="p-10">{children}</div>;
}
