import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/animations/variants";
import { consumptionStats } from "@/constants/consumptionStats";
import { motion } from "motion/react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import Counter from "../Counter";

export default function ConsumptionOverviewSection() {
  return (
    <section className="py-25 px-5">
      <div className="text-center container mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUpVariants}
          className="mb-4 text-center text-[1.8rem] sm:text-[2.5rem] font-extrabold"
        >
          نگاهی به مصرف آب و برق
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUpVariants}
          className="text-muted-foreground text-[1.1rem] font-medium mb-16"
        >
          ایران در مقایسه با میانگین جهانی
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {consumptionStats.map((consumptionStat, idx) => {
            const Icon = consumptionStat.icon;

            return (
              <motion.li key={idx} variants={fadeUpVariants}>
                <Card className="py-10 px-7.5 ring-0 rounded-[30px] border border-[#f8f8f8] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all relative duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2.5">
                  <div
                    className={cn(
                      "size-37.5 rounded-full -left-12.5 -top-12.5 absolute",
                      consumptionStat.color === "accent" && "bg-accent",
                      consumptionStat.color === "tertiary" && "bg-tertiary",
                      consumptionStat.color === "primary" && "bg-secondary",
                    )}
                  />
                  <CardHeader className="flex flex-col items-center">
                    <Icon
                      className={cn(
                        "size-12.5! mb-5",
                        consumptionStat.color === "accent" &&
                          "text-accent-foreground",
                        consumptionStat.color === "tertiary" &&
                          "text-tertiary-foreground",
                        consumptionStat.color === "primary" && "text-primary",
                      )}
                    />
                    <span className="text-[3.5rem] font-black mb-1.25 leading-none">
                      <Counter value={consumptionStat.value} />
                    </span>
                    <CardTitle className="text-[1.1rem] font-semibold mb-3.75">
                      {consumptionStat.title}
                    </CardTitle>
                    <CardDescription>
                      {consumptionStat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
