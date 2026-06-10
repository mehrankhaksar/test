import Logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const MotionButton = motion.create(Button);

export default function HeroSection() {
  return (
    <section className="bg-hero-gradient h-screen pt-22.5">
      <div className="flex flex-col items-center text-center p-5">
        <img className="h-37.5" src={Logo} alt="Logo" />
        <h2 className="mb-6.25 font-bold text-[3.5rem] tracking-[-1px] leading-[1.2]">
          آینده‌ای روشن،
          <br />
          با مصرفی هوشمند
        </h2>

        <p className="text-muted-foreground text-[1.2rem] font-light mb-10">
          کوچک‌ترین تغییر در عادات روزانه ما می‌تواند نقش بزرگی در مدیریت مصرف
          آب و برق داشته باشد.
        </p>
        <MotionButton
          className="h-fit px-10 py-3.5 rounded-full font-bold text-base"
          asChild
          whileHover={{
            y: -3,
            boxShadow: "0 4px 15px rgba(11, 31, 58, 0.2)",
          }}
          transition={{
            duration: 0.05,
          }}
        >
          <a href="#">آشنایی با راهکار‌ها</a>
        </MotionButton>
      </div>
    </section>
  );
}
