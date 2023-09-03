"use client";
import { SideBar } from "@/modules/layout/SideBar";
import "./globals.css";
import { trpc } from "@/utils/trpc";
import { Footer } from "@/modules/layout/Footer";
import { Header } from "@/modules/layout/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        <div className="ml-64 min-h-screen flex flex-col justify-between">
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default trpc.withTRPC(RootLayout);
