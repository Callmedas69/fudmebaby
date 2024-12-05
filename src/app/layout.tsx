import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const comicBook = localFont({
  src: "./fonts/ComicBook.otf",
  variable: "--font-comic-book",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fud Me Baby",
  description: "Fud is my food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicBook.className} antialiased`}>{children}</body>
    </html>
  );
}
