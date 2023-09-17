"use client";
import { SideBar } from "@/modules/layout/SideBar";
import "./globals.css";
import { trpc } from "@/utils/trpc";
import { Footer } from "@/modules/layout/Footer";
import { Header } from "@/modules/layout/Header";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const layoutNotIncludedPages: string[] = ["/login"];

  const isLayoutIncluded = !layoutNotIncludedPages.includes(pathname as string);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {isLayoutIncluded ? (
            <>
              <SideBar />
              <div className="ml-64 min-h-screen flex flex-col justify-between">
                <div>
                  <Header />
                  {children}
                </div>
                <Footer />
              </div>
            </>
          ) : (
            children
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

export default trpc.withTRPC(RootLayout);
