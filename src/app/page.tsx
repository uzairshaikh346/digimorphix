import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import HowCanWeHelp from "./components/howCanWeHelp";
import DefineServices from "./components/DefineServices";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServiceSection/>
      <HowCanWeHelp/>
      <DefineServices/>
      <ContactForm/>
    </div>
  );
}
