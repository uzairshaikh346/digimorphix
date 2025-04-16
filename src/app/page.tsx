import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import { ClientReview } from "./components/ClientReview";
import TrustContentSection from "./components/TrustContentSection";
import HowCanWeHelp from "./components/howCanWeHelp";
import Testinominals from "./components/testinominals";


export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <TrustContentSection/>

      <ServiceSection />
      <HowCanWeHelp/>
      <ClientReview />
      <Testinominals/>
    </div>
  );
}
