import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/animations/variants";
import { businessEnergyManagementTips } from "@/constants/businessEnergyManagementTips";
import { motion } from "motion/react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function BusinessEnergyManagementSection() {
  return (
    <section className="py-25 px-5 bg-secondary">
      <div className="text-center container mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUpVariants}
          className="mb-4 text-center text-[1.8rem] sm:text-[2.5rem] font-extrabold"
        >
          مدیریت برق در صنوف
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUpVariants}
          className="text-muted-foreground text-[1.1rem] font-medium mb-16"
        >
          راهکارهای طلایی برای کاهش هزینه‌ها و مدیریت بار
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {businessEnergyManagementTips.map(
            (businessEnergyManagementTip, idx) => {
              const Icon = businessEnergyManagementTip.icon;

              return (
                <motion.li key={idx} variants={fadeUpVariants}>
                  <Card className="h-full p-7.5 ring-0 rounded-[25px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all relative duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 border hover:border-tertiary-foreground">
                    <CardHeader className="flex gap-5">
                      <span className="size-13.75 flex justify-center items-center bg-tertiary shrink-0 rounded-[16px]">
                        <Icon className="size-7.5! fill-tertiary-foreground" />
                      </span>
                      <div className="text-start">
                        <CardTitle className="text-[1.1rem] mb-2.5 font-bold">
                          {businessEnergyManagementTip.title}
                        </CardTitle>
                        <CardDescription className="text-[0.9rem] leading-[1.8]">
                          {businessEnergyManagementTip.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.li>
              );
            },
          )}
        </motion.ul>
      </div>
    </section>
  );
}
