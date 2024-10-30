import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

// COMPONENTS IMPORT
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "A crossplatform PWA app for tracking of expense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
