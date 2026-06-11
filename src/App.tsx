import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SavingTipsSection from "./components/sections/SavingTipsSection";
import HeroSection from "./components/sections/HeroSection";
import { DirectionProvider } from "./components/ui/direction";
import ConsumptionOverviewSection from "./components/sections/ConsumptionOverviewSection";

export default function App() {
  return (
    <DirectionProvider direction="rtl" dir="rtl">
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <SavingTipsSection />
        <ConsumptionOverviewSection />
        <Footer />
      </main>
    </DirectionProvider>
  );
}
