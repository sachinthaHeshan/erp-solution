"use client";
import { SideBar } from "@/modules/layout/SideBar";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Collective OS",
//   description: "Collective OS",
// };

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}

export default trpc.withTRPC(RootLayout);
