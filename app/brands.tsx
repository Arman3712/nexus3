import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/logo/mpi logo.png",
  },
  {
    image: "/logo/BSC 1.png",
  },
  {
    image: "/logo/sarvam.png",
  },
  {
    image: "/logo/jay ganesh.png",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-80">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
                <Image
                  priority
                  src={logo.image}
                  width={500}
                  height={500}
                  alt="logo"
                  className="w-full h-auto max-w-full rounded-lg"
                />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Nexus does for us.&quot;
        </div>
      </div>
    </div>
  );
};

export default Brands;
