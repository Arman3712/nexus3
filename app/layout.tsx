
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "NEXUS InfoTech",
  description: "Modern Software Engineering - The World Of Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Sarvam.png" sizes="any" />
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
      </body>
    </html>
  );
}
