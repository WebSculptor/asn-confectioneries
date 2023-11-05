import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const varela_round = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ASN Confectioneries - For moments that need a touch of sweetness.",
  description:
    "ASN Confectioneries is a confectionery shop dedicated to creating unforgettable experiences for sweet tooth enthusiasts. They use only the finest ingredients, ensuring every bite is a symphony of flavor and texture.",
  icons: {
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-milk", varela_round.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
