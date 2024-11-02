'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


const words = [
  {
    text: "Streamline",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "your",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "business",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "with",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "our",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "services.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">

          <div className="flex flex-col items-center justify-center h-[4rem] text-lg">
            <TypewriterEffectSmooth words={words} />
          </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          From website design to social media marketing, We offer a wide range of services to help you grow your business. 
        </p>
        
        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;
