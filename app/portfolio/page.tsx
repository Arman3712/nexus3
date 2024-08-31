"use client";


import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/navbar";

export const products = [
  {
    title: "Sarvam Plast",
    link: "https://sarvamplast.in",
    thumbnail:
      "https://github.com/Arman3712/nexus3/blob/main/public/sarvamplast.png?raw=true",
  },
  {
    title: "Brikesh Sales Corporation",
    link: "https://brikeshsalescorporation.com",
    thumbnail:
    "https://github.com/Arman3712/nexus3/blob/main/public/bsc.png?raw=true",
  },
  {
    title: "Sarvam Plast",
    link: "https://sarvamplast.in",
    thumbnail:
      "https://github.com/Arman3712/nexus3/blob/main/public/sarvamplast.png?raw=true",
  },
  {
    title: "Figma Clone By Nexus Soft Solutions",
    link: "https://https://ocean-ui.vercel.app/",
    thumbnail:
      "https://github.com/Arman3712/nexus3/blob/main/public/fipro.png?raw=true",
  },
  {
    title: "Nexus Soft Solutions",
    link: "https://nexusit.in",
    thumbnail:
    "https://github.com/Arman3712/nexus3/blob/main/public/nexus.png?raw=true",
  },
  {
    title: "Figma Clone By Nexus Soft Solutions",
    link: "https://https://ocean-ui.vercel.app/",
    thumbnail:
      "https://github.com/Arman3712/nexus3/blob/main/public/fipro.png?raw=true",
  },
  {
    title: "Nexus Soft Solutions",
    link: "https://nexusit.in",
    thumbnail:
      "https://github.com/Arman3712/nexus3/blob/main/public/nexus.png?raw=true",
  },
];


export default function HeroParallaxDemo() {


  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
  <HeroParallax products={products} />
    </div>
);
}

