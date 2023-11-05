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
    "Established with a passion for crafting unforgettable confectionery experiences, ASN Confectioneries is a haven for those with an insatiable sweet tooth. We pride ourselves on our commitment to using only the finest, hand-selected ingredients, ensuring that every bite is a symphony of flavor and texture. From rich, velvety chocolates to delicate, flaky pastries, our diverse range of treats is meticulously crafted to tantalize the taste buds and leave a lasting impression. With a dedication to artistry and a penchant for perfection, ASN Confectioneries invites you to immerse yourself in a world of exquisite sweetness and unparalleled culinary craftsmanship.",
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
