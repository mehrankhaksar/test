import Electricity from "@/assets/images/electricity.svg?react";
import Water from "@/assets/images/water.svg?react";

export default function SavingTipsSection() {
  return (
    <section className="py-25 px-5 bg-secondary">
      <div className="text-center container mx-auto">
        <h3 className="text-[2.5rem] font-bold mb-16">
          راهکارهای طلایی صرفه‌جویی
        </h3>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex justify-center items-center gap-2.5 pb-3.75 mb-6.25 border-b-2 text-tertiary-foreground border-[#f6e4c8]">
              <Electricity className="w-8 h-8" />
              <h4 className="text-[1.5rem] font-extrabold">
                ۱۰ راهکار مدیریت برق
              </h4>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center gap-2.5 pb-3.75 mb-6.25 border-b text-accent-foreground border-[#c3e9f8]">
              <Water className="w-8 h-8" />
              <h4 className="text-[1.5rem] font-extrabold">
                ۱۰ راهکار مدیریت آب
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
