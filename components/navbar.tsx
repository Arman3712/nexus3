"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; 
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToBrands,
  scrollToServices, 
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
   <div className="w-full sticky top-0 backdrop-blur-sm z-50  bg-black antialiased bg-grid-white/[0.02]">
      <div className="w-full p-4 md:p-5 flex items-center justify-between">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/heronexus.png"
              alt="Logo"
              width={100}
              height={70}
              className=" md:w-140 md:h-140 "
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div>
            <Link href="/portfolio" className="hover:text-[#9500ff]">
               portfolio
            </Link>
          </div>
          <div>
           <Link href='/about' className="hover:text-[#9500ff]">
                About us
            </Link>
           </div>
           <div>
             <Link href='/technolgies' className="hover:text-[#9500ff]">
                Technologies
            </Link>
           </div>
            <div>
             <Link href='https://nexum-ai.vercel.app/' className="hover:text-[#9500ff]">
                Ai Assistant !
            </Link>
           </div>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
