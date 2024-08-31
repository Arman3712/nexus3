"use client";


import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/navbar";

export const products = [
  {
    title: "Sarvam Plast",
    link: "https://sarvamplast.in",
    thumbnail:
      "/sarvamplast.png",
  },
  {
    title: "Brikesh Sales Corporation",
    link: "https://brikeshsalescorporation.com",
    thumbnail:
    "/bsc.png",
  },
  {
    title: "Sarvam Plast",
    link: "https://sarvamplast.in",
    thumbnail:
      "/sarvamplast.png",
  },
  {
    title: "Figma Clone By Nexus Soft Solutions",
    link: "https://https://ocean-ui.vercel.app/",
    thumbnail:
      "/fipro.png",
  },
  {
    title: "Nexus Soft Solutions",
    link: "https://nexusit.in",
    thumbnail:
    "/nexus.png",
  },
  {
    title: "Figma Clone By Nexus Soft Solutions",
    link: "https://https://ocean-ui.vercel.app/",
    thumbnail:
      "/fipro.png",
  },
  {
    title: "Nexus Soft Solutions",
    link: "https://nexusit.in",
    thumbnail:
      "/nexus.png",
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

