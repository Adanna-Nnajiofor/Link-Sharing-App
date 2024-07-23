"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import "./globals.css"; // Ensure this imports Tailwind CSS
import { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Conditionally render Navbar */}
          {showNavbar && <Navbar />}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
