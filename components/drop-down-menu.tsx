import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void; // Add scrollToServices function to props
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  return (
    <motion.div
      className="
        w-screen
        h-screen
        bg-gradient-to-b 
        from-neutral-50
        to-neutral-400 
        bg-opacity-50
        text-slate-300
        p-6
        space-y-4
        absolute
        top-28
        left-0
        right-0
        z-50
        rounded-t-3xl
      "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link  href="#faqs" className="text-black text-2xl">
          FAQS
        </Link>
        <Link href="/contact" className="text-black text-2xl">
          Contact
        </Link>

        {/* Add onClick handler to Services link */}
        <Link href='/#services'  className="cursor-pointer text-black text-2xl">
          Services
        </Link>
        <Link href="/about" className="text-black text-2xl">
          About us
        </Link>
        <Link href="/technolgies" className="text-black text-2xl">
          Technologies
        </Link>
        <Link href='https://nexum-ai.vercel.app/' className="hover:text-[#9500ff]">
          Ai Assistant 🤖
        </Link>
         <Link href='/partner' className="hover:text-[#9500ff]">
          Partner Program 
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
