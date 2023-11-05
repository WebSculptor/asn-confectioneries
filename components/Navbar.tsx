"use client";

import { useState } from "react";
import Logo from "./Logo";
import MaxContainer from "./MaxContainer";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { PiHamburger } from "react-icons/pi";
import { cn } from "@/lib/utils";

const paths = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/menu",
    name: "menu",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/place-order",
    name: "Place an Order",
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const isCart: boolean = false;

  return (
    <>
      <MaxContainer className="p-2 md:p-3 backdrop-blur-0 bg-milk md:bg-none md:backdrop-blur-lg flex items-center justify-between sticky top-0">
        <Logo src="/light-2.png" color="text-brown" />

        <ul className="hidden md:flex items-center space-x-4">
          {paths.map(({ name, path }: { name: string; path: string }) => (
            <Link
              onClick={() => setIsMenuActive(false)}
              href={path}
              key={name}
              className="text-brown hover:text-black transition-colors text-sm uppercase font-medium pointer"
            >
              {name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center justify-end space-x-3 w-40">
          <div className="w-fit h-fit relative pointer flex items-center justify-center">
            {isCart && (
              <span className="w-4 h-4 rounded-full absolute -top-1.5 -right-1.5 bg-red-600 border-[3px] border-[#FFF4F6]"></span>
            )}
            <ShoppingCart className="w-6 h-6 text-brown" />
          </div>

          <div
            className="w-8 h-8 pointer flex md:hidden items-center justify-center"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <PiHamburger className="w-6 h-6 text-brown" />
          </div>
        </div>
      </MaxContainer>

      <div
        className={cn(
          "fixed top-16 flex md:hidden max-w-md w-[calc(100%-95px)] border border-r-0 border-[#442a00] rounded-xl rounded-r-none p-3 z-10 bg-milk shadow-lg transition-all",
          {
            "-right-full": isMenuActive === true,
            "right-0": isMenuActive !== true,
          }
        )}
      >
        <ul className="flex flex-col items-start space-y-2 w-full">
          {paths.map(({ name, path }: { name: string; path: string }) => (
            <Link
              onClick={() => setIsMenuActive(false)}
              href={path}
              key={name}
              className="text-brown hover:text-black select-none transition-colors text-sm uppercase font-medium pointer px-4 py-3 w-full rounded-md bg-[#ffeeee]"
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
