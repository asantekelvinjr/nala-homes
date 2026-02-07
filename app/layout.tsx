import type { Metadata } from "next";
import {  Inika, Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Footer from "@/components/Home/Footer/Footer";
import MobileNavbar from "@/components/Home/Navbar/MobileNavbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [ "100", "200" ,"300", "400", "500", "600", "700"], 
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

const inika = Inika({
  variable: "--font-inika",
  subsets: ["latin"],
  weight: [  "400",  "700"], 
});

export const metadata: Metadata = {
  title: "Nala Homes",
  description: "A real estate landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${oxanium.variable} ${inika.variable} antialiased`}
      >
        <Navbar/>
        {/* <MobileNavbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
