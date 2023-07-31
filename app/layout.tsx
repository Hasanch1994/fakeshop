import TopNavigation from "@/components/nav/TopNavigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col h-full bg-bg ">
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}
