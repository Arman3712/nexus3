
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'
import GoogleTagManager from "@/components/GoogleTagManager";

const structData = {
'@context': 'https://schema.org',
'@type': 'Software Development',
headline: 'Nexus IT - Modern web development',
description: 'Nexus Software Development is a leading provider of graphic design and web development services, dedicated to transforming your digital presence',
author: [
{
'@type': 'Person',
name: 'Arman Kureshi',
},
],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "Software development",
  "mainEntity": [{
    "@type": "Question",
    "name": "Best website development agency",
    "name2": "How to create a website",
    "name3": "how to make website",
    "name4": "How to grow business faster",
    "name5": "how to create online business",
    "name6": "how to grow digitally",
    "name7": "website",
    "name8": "website development",
    "name1": "website engineering",
    "name0": "modern website development",
    "name9": "online business",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nexus IT is a full fledge modern and best performant websites development agency.",
      "text2": "Create, Grow and Scale your business."
    },
  }]
};

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusit.in/"),
  title: {
    default: "Nexus IT - Software development",
    template: '%s | Nexus IT software development agency'
  },
  description: "Nexus IT is a leading provider of graphic design and web development services, dedicated to transforming your digital presence. Our talented team of designers and developers work collaboratively to create visually stunning and highly functional websites. We specialize in delivering custom web solutions and captivating graphic designs that align with your brand identity. From designing logos and marketing materials to building responsive websites and web applications!",
  openGraph: {
    title: "Nexus IT | Custom tailored solutions for your business. We are excited to help you grow your business.",
    description: "Nexus ITS is a full fledge modern and best performant websites development agency!",
    type: "website",
    locale: "en_india",
    url: "https://nexusit.in/",
    siteName: "Nexus IT"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-adsense-account" content="ca-pub-1708221248229738" />
        <script
        key="structured-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
        />
         <script
        key="structured-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        </Head>

      <body suppressHydrationWarning={true} className={font.className}>
         <NextTopLoader 
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            showSpinner={false}
            zIndex={1600}
            color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
            easing="ease"
            speed={900}
         />
        {children}
        <GoogleTagManager containerId={"GTM-MQFCBFCF"} /> 
        <GoogleTagManager containerId={"GT-57SQ6BZ7"} /> 
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
