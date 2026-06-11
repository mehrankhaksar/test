import PeakHours from "@/assets/images/peak-hours.svg?react";
import UnusedDevices from "@/assets/images/unused-devices.svg?react";
import StoreSign from "@/assets/images/store-sign.svg?react";
import AirConditioner from "@/assets/images/air-conditioner.svg?react";
import ShadeInsulation from "@/assets/images/shade-insulation.svg?react";
import LedBulb from "@/assets/images/led-bulb.svg?react";

export const businessEnergyManagementTips = [
  {
    icon: PeakHours,
    title: "ساعات اوج بار",
    description:
      "کاهش مصرف در ساعات ۱۲ تا ۱۷ و ۲۰ تا ۲۳ به مدیریت پایدار شبکه کمک شایانی می‌کند.",
  },
  {
    icon: UnusedDevices,
    title: "تجهیزات غیرضروری",
    description:
      "خاموش کردن تجهیزات اداری و فروشگاهی پس از اتمام ساعت کاری یک عادت مهم است.",
  },
  {
    icon: StoreSign,
    title: "تابلوهای سردرب",
    description:
      "خاموش کردن تابلوهای مغازه در روشنایی روز و استفاده از نورپردازی ال‌ای‌دی کم‌مصرف.",
  },
  {
    icon: AirConditioner,
    title: "کولر ۲۵ درجه",
    description:
      "تنظیم دمای کولر روی عدد ۲۵ درجه سانتی‌گراد بهترین نقطه برای تعادل سرما و مصرف است.",
  },
  {
    icon: ShadeInsulation,
    title: "سایه‌بان و عایق",
    description:
      "نصب سایه‌بان برای کاهش ورود تابش مستقیم خورشید و کاهش بار سرمایشی ساختمان.",
  },
  {
    icon: LedBulb,
    title: "لامپ‌های LED",
    description:
      "جایگزینی لامپ‌های پرمصرف قدیمی با لامپ‌های ال‌ای‌دی مدرن و کم‌مصرف.",
  },
] as const;
