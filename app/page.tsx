"use client";

import { useState, useRef } from "react";
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import GraphicDesign from "./graphic-design";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import { CardStack } from "@/components/ui/card-stack";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import IconCloud, {IconCloudDemo} from "@/components/magicui/icon-cloud";
import Head from 'next/head'
import { NextSeo } from 'next-seo';


export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const people = [
    {
      id: 1,
      name: "Teja chennu",
      designation: "Web Engineer",
      image:
        "/images/teja.png",
    },
    {
      id: 3,
      name: "Arman S.K.",
      designation: "Senior Software Engineer",
      image:
        "/images/arman_profile_photo-removebg-preview.png",
    },
    {
      id: 2,
      name: "mr.Sabir Y.K.",
      designation: "Founder",
      image:
        "/images/sabir_bhai_profile_photo-removebg.png",
    },
  ];
  
  

  return (

    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <NextSeo
        title="Nexus IT | Modern Software Development & Designer"
        description="Nexus ITS is a full fledge modern and best performant websites development agency, a agency specializing in full-stack development, responsive design, and SEO."
        canonical="https://nexusit.in"
        openGraph={{
          url: 'https://nexusit.in',
          title: 'Nexus IT | Modern Software Development & Arman kureshi',
          description: 'Nexus Software Development is a leading provider of graphic design and web development services, dedicated to transforming your digital presence. Our talented team of designers and developers work collaboratively to create visually stunning and highly functional websites. We specialize in delivering custom web solutions and captivating graphic designs that align with your brand identity. From designing logos and marketing materials to building responsive websites and web applications, we ensure every project is executed with precision and creativity. Partner with us to enhance your brand’s online presence and achieve your business goals',
          images: [{ url: 'https://github.com/Arman3712/nexus3/blob/main/public/images/Frame%2023.png?raw=true' }],
        }}
      />
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="darkblue" />
      <Spotlight className="md:hidden top-2 left-2 bottom-80  " fill="darkblue" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Create, grow, and <br /> scale your <Cover>BUSINESS 🚀</Cover> 
            </div>
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
              Custom tailored solutions for your business. We are a team of
              creatives who are excited to help you grow your business.
            </p>

            <Link
              href={
                "/contact"
              }
              className="cursor-pointer animate-shimmer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
            >
              Get In Touch
            </Link>
        </div>
        <div className="h-[20rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
          <Image
                  priority
                  src={'/heronexus.png'}
                  width={500}
                  height={500}
                  alt="logo"
                  className="w-full h-auto max-w-[500px] "
                  />
          <div className="w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
              />
    
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
    </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
          <div className="h-[20rem] flex items-center justify-center w-full">
            <div>
                 <IconCloudDemo />
            </div>
          </div>
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id="services">
          <Services />
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] ml-12 px-6 font-medium text-slate-400 transition-colors
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
          </div>
        </div>
        <InfiniteMovingCardsDemo />
        <div id="faqs">
          <FAQS />
        </div>
        <text>
          <div className="text-center text-lg text-neutral-300 pt-10">
            <p className="text-lg text-neutral-300">
              Copyright &copy; Nexus ITS. 2024 All Rights Reserved
            </p>
          </div>
          <br />
        </text>
      </div>
  );
}
