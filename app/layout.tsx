import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuiltSpace - Share Your Creations, Discover New Launches",
  description:
    "BuiltSpace is a platform for building and sharing your own projects with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable}antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
