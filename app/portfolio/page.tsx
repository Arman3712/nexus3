"use client";


import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/navbar";
import { NextSeo } from 'next-seo';

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
    link: "https://ocean-ui.vercel.app/",
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
    link: "https://ocean-ui.vercel.app/",
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
      <NextSeo
        title="our work ! - Nexus IT "
        description="Nexus ITS is a full fledge modern and best performant websites development agency, a agency specializing in full-stack development, responsive design, and SEO."
        canonical="https://nexusit.in/portfolio"
        openGraph={{
          url: 'https://nexusit.in/portfolio',
          title: 'our work ! - Arman kureshi',
          description: 'Nexus IT is a leading provider of graphic design and web development services, dedicated to transforming your digital presence. Our talented team of designers and developers work collaboratively to create visually stunning and highly functional websites. We specialize in delivering custom web solutions and captivating graphic designs that align with your brand identity. From designing logos and marketing materials to building responsive websites and web applications, we ensure every project is executed with precision and creativity. Partner with us to enhance your brand’s online presence and achieve your business goals',
          images: [{ url: 'https://github.com/Arman3712/nexus3/blob/main/public/images/Frame%2023.png?raw=true' }],
        }}
      />
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <br />
  <HeroParallax products={products} />
    </div>
);
}

