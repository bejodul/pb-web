import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Primus Niaga Brunei SDN BHD",
  description: "Primus Niaga Brunei SDN BHD Prime ICT Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-inter antialiased">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
