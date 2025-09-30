import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App name",
  description: "Techpre product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
