import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import HowCanWeHelp from "./components/howCanWeHelp";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServiceSection/>
      <HowCanWeHelp/>
    </div>
  );
}
