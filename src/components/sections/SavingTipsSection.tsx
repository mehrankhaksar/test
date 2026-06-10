import Electricity from "@/assets/images/electricity.svg?react";
import Water from "@/assets/images/water.svg?react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "motion/react";

const savingTips = {
  electricity: [
    {
      title: "تنظیم دمای کولر روی ۲۴ تا ۲۶ درجه",
      content:
        "هر درجه خنک‌تر کردن کولر گازی، حدود ۵ تا ۷٪ مصرف برق را افزایش می‌دهد. دمای ۲۴ درجه تعادلی میان آسایش و مصرف بهینه است.",
    },
    {
      title: "استفاده از لامپ‌های LED",
      content:
        "لامپ‌های ال‌ای‌دی تا ۸۰٪ کمتر از لامپ‌های معمولی انرژی مصرف می‌کنند و عمر طولانی‌تری دارند. به جای رشته‌ای و کم‌مصرف قدیمی، از LED استفاده کنید.",
    },
    {
      title: "خاموش کردن وسایل استندبای",
      content:
        "تلویزیون، مودم و دستگاه‌های پخش در حالت خاموش نیز برق مصرف می‌کنند. در صورت عدم استفاده طولانی، دوشاخه آن‌ها را از پریز بکشید.",
    },
    {
      title: "خاموش کردن چراغ‌های اضافی",
      content:
        "ساده‌ترین و موثرترین راهکار! هنگام خروج از اتاق، چراغ را خاموش کنید. استفاده از چراغ خواب یا لوستر کم‌چراغ در فضاهای بزرگ نیز مفید است.",
    },
    {
      title: "عایق‌کاری و درزگیری درها و پنجره‌ها",
      content:
        "با عایق‌کاری و درزگیری مناسب، از هدررفت انرژی جلوگیری کنید. این کار باعث کاهش مصرف برق برای سرمایش و گرمایش در تمام طول سال می‌شود.",
    },
    {
      title: "استفاده از وسایل پرمصرف در ساعات کم‌بار",
      content:
        "وسایلی مانند ماشین لباسشویی، ظرفشویی و اتو را در ساعات کم‌بار شبکه استفاده کنید تا فشار بر شبکه برق کاهش یابد.",
    },
    {
      title: "استفاده بهینه از ماشین لباسشویی",
      content:
        "ماشین لباسشویی را با ظرفیت کامل و ترجیحاً با آب سرد روشن کنید و در صورت امکان لباس‌ها را در هوای آزاد خشک کنید.",
    },
    {
      title: "نگهداری صحیح از جاروبرقی",
      content:
        "با تخلیه منظم کیسه جاروبرقی و استفاده از قدرت مکش متناسب با سطح مورد نظر، مصرف برق را کاهش داده و عمر دستگاه را افزایش دهید.",
    },
    {
      title: "توجه به برچسب انرژی هنگام خرید",
      content:
        "هنگام خرید لوازم برقی، دستگاه‌های دارای برچسب انرژی با راندمان بالا را انتخاب کنید تا مصرف برق و هزینه‌های خانوار کاهش یابد.",
    },
    {
      title: "فاصله مناسب یخچال از دیوار",
      content:
        "یخچال و سایر لوازم برقی را با فاصله مناسب از دیوار قرار دهید تا گردش هوا بهتر انجام شود و دستگاه با مصرف برق کمتری کار کند.",
    },
  ],
  water: [
    {
      title: "بستن شیر هنگام مسواک زدن",
      content:
        "در زمان مسواک زدن (حدود ۳ دقیقه) با بستن شیر آب، می‌توانید تا ۱۲ لیتر آب در هر بار استفاده حفظ کنید. این مقدار در طول ماه به صدها لیتر می‌رسد.",
    },
    {
      title: "کاهش زمان دوش گرفتن",
      content:
        "هر دقیقه دوش گرفتن حدود ۱۰ تا ۱۵ لیتر آب مصرف می‌کند. با کاهش زمان دوش به ۵ دقیقه، می‌توانید مصرف خود را به نصف برسانید.",
    },
    {
      title: "استفاده از ظرفیت کامل ماشین لباسشویی",
      content:
        "ماشین لباسشویی برای حداکثر ظرفیت طراحی شده است. با شستن لباس‌ها در تعداد کم، آب و برق زیادی هدر می‌رود.",
    },
    {
      title: "نصب سرشیرهای کاهنده مصرف",
      content:
        "این وسیله ساده، جریان آب را با هوا مخلوط کرده و فشار را حفظ می‌کند اما تا ۵۰٪ در مصرف آب شیرآلات صرفه‌جویی می‌کند.",
    },
    {
      title: "رفع سریع نشتی شیرها و سیفون",
      content:
        "یک قطره آب در ثانیه معادل هزاران لیتر آب در ماه است. چک کردن دوره‌ای شیرها و سیفون و تعمیر سریع آن‌ها ضروری است.",
    },
    {
      title: "استفاده مجدد از آب‌های قابل استفاده",
      content:
        "از آب‌های قابل استفاده مانند آب شستشوی میوه و سبزیجات برای آبیاری گیاهان و فضای سبز استفاده کنید تا مصرف آب کاهش یابد.",
    },
    {
      title: "آموزش صرفه‌جویی به خانواده",
      content:
        "با آگاه‌سازی اعضای خانواده درباره روش‌های مدیریت مصرف آب، فرهنگ مصرف بهینه را از خانه آغاز کنید.",
    },
    {
      title: "انتشار پیام‌های آموزشی",
      content:
        "نکات و تجربه‌های صرفه‌جویی در مصرف آب را از طریق شبکه‌های اجتماعی، مدرسه، دانشگاه یا محل کار با دیگران به اشتراک بگذارید.",
    },
    {
      title: "دعوت دیگران به پویش",
      content:
        "دوستان، همکاران و اعضای خانواده را به مشارکت در پویش مدیریت مصرف آب دعوت کنید تا اثرگذاری اقدامات جمعی افزایش یابد.",
    },
    {
      title: "مشارکت در فعالیت‌های مردمی",
      content:
        "با حضور در برنامه‌های آموزشی، رویدادهای فرهنگی و گروه‌های داوطلبانه، در ترویج مدیریت مصرف آب و ارائه ایده‌های نوآورانه نقش‌آفرینی کنید.",
    },
  ],
};

export default function SavingTipsSection() {
  return (
    <section className="py-25 px-5 bg-secondary">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          amount: 0.1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-center container mx-auto"
      >
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
            <Accordion className="space-y-3.75" type="multiple">
              {savingTips.electricity.map((item, index) => (
                <AccordionItem
                  className="bg-white border-b-0! rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border-tertiary-foreground"
                  key={index}
                  value={`electric-${index}`}
                >
                  <AccordionTrigger className="py-4.5 px-6.25 no-underline! items-center cursor-pointer hover:bg-[#fafafa]">
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
          </div>
          <div>
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
                  <AccordionTrigger className="py-4.5 px-6.25 no-underline! items-center cursor-pointer hover:bg-[#fafafa]">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
