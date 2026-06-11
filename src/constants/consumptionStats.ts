import Electricity from "@/assets/images/electricity.svg?react";
import Water from "@/assets/images/water.svg?react";
import EnergyRanking from "@/assets/images/energy-ranking.svg?react";

export const consumptionStats = [
  {
    icon: Water,
    color: "accent",
    value: 220,
    title: "مصرف روزانه آب هر نفر",
    description: "میانگین جهانی حدود ۱۵۰ لیتر",
  },
  {
    icon: Electricity,
    color: "tertiary",
    value: "۳٬۶۶۰",
    title: "مصرف سالانه برق هر نفر",
    description: "میانگین جهانی حدود ۳۲۰۰ kWh",
  },
  {
    icon: EnergyRanking,
    color: "primary",
    value: 20,
    title: "جایگاه ایران در مصرف انرژی",
    description: "جزو ۲۰ کشور پرمصرف برق و آب در جهان",
  },
];
