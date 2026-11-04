import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isra Saleem | Associate Software Engineer",
  description:
    "Portfolio of Isra Saleem, a BSIT graduate and web developer experienced in React, Next.js, Node.js, Python and software application development.",
  keywords: [
    "Isra Saleem",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Isra Saleem" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}