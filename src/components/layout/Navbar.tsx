import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      className="fixed w-full top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md"
      initial={{ padding: 20 }}
      animate={{
        padding: scrolled ? 10 : 20,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="text-center">
        <h1 className="text-[1.8rem] font-black">به انرژیِ ایران جان بده</h1>
      </div>
    </motion.header>
  );
}
