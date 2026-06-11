import Electricity from "@/assets/images/electricity.svg?react";
import Water from "@/assets/images/water.svg?react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "motion/react";
import { savingTips } from "@/constants/savingTips";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/animations/variants";

export default function SavingTipsSection() {
  return (
    <section className="py-25 px-5 bg-secondary">
      <div className="text-center container mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUpVariants}
          className="mb-16 text-center text-[1.8rem] sm:text-[2.5rem] font-extrabold"
        >
          راهکارهای طلایی صرفه‌جویی
        </motion.h3>
        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeUpVariants}>
            <div className="flex justify-center items-center gap-2.5 pb-3.75 mb-6.25 border-b-2 text-tertiary-foreground border-[#f6e4c8]">
              <Electricity className="w-8 h-8" />
              <h4 className="text-[1.5rem] font-extrabold">
                ۱۰ راهکار مدیریت برق
              </h4>
            </div>
            <Accordion className="space-y-3.75" type="multiple">
              {savingTips.electricity.map((item, index) => (
                <AccordionItem
                  className="bg-white border-b-0! rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-tertiary-foreground"
                  key={index}
                  value={`electric-${index}`}
                >
                  <AccordionTrigger className="text-start py-4.5 px-6.25 no-underline! items-center cursor-pointer hover:bg-[#fafafa]">
                    <div className="flex items-center">
                      <span className="size-8 text-tertiary-foreground bg-tertiary flex justify-center items-center shrink-0 rounded-[8px] ml-3.75">
                        <Electricity className="size-5!" />
                      </span>
                      <h5 className="font-bold text-[1rem]">{item.title}</h5>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-start py-4.5 px-6.25 text-[0.95rem] leading-[1.9]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          <motion.div variants={fadeUpVariants}>
            <div className="flex justify-center items-center gap-2.5 pb-3.75 mb-6.25 border-b text-accent-foreground border-[#c3e9f8]">
              <Water className="w-8 h-8" />
              <h4 className="text-[1.5rem] font-extrabold">
                ۱۰ راهکار مدیریت آب
              </h4>
            </div>
            <Accordion className="space-y-3.75" type="multiple">
              {savingTips.water.map((item, index) => (
                <AccordionItem
                  className="bg-white border-b-0! rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-accent-foreground"
                  key={index}
                  value={`water-${index}`}
                >
                  <AccordionTrigger className="text-start py-4.5 px-6.25 no-underline! items-center cursor-pointer hover:bg-[#fafafa]">
                    <div className="flex items-center">
                      <span className="size-8 text-accent-foreground bg-accent flex justify-center items-center shrink-0 rounded-[8px] ml-3.75">
                        <Electricity className="size-5!" />
                      </span>
                      <h5 className="font-bold text-[1rem]">{item.title}</h5>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-start py-4.5 px-6.25 text-[0.95rem] leading-[1.9]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
