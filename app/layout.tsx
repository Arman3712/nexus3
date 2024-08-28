
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nexus Software Development",
  description: "Nexus Software Development is a leading provider of graphic design and web development services, dedicated to transforming your digital presence. Our talented team of designers and developers work collaboratively to create visually stunning and highly functional websites. We specialize in delivering custom web solutions and captivating graphic designs that align with your brand identity. From designing logos and marketing materials to building responsive websites and web applications, we ensure every project is executed with precision and creativity. Partner with us to enhance your brand’s online presence and achieve your business goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/heronexus.png" sizes="any" />
      </head>
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
