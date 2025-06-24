import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./_components/aos-init";

const mulishSans = Mulish({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Butta Drop",                                                           
  description: "BDrop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`${mulishSans.className}  antialiased`}
      >
        {children}
        <AOSInit />
      </body>
    </html>
  );
}
