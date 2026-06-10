import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import { DirectionProvider } from "./components/ui/direction";

export default function App() {
  return (
    <DirectionProvider direction="rtl" dir="rtl">
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <main className="max-w-7xl mx-auto px-5"></main>
        <Footer />
      </div>
    </DirectionProvider>
  );
}
