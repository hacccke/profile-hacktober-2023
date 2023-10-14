import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hacktoberfest 2023",
  description: "CELEBRATE OUR 10TH YEAR SUPPORTING OPEN SOURCE!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>{children}</body>
    </html>
  );
}
