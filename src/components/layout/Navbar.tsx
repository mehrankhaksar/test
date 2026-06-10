import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else if (window.scrollY < 10) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div
        className={`${scrolled ? "p-2.5" : "p-5"} text-center transition-[padding] duration-300`}
      >
        <h1 className="text-[1.8rem] font-black">به انرژیِ ایران جان بده</h1>
      </div>
    </header>
  );
}
