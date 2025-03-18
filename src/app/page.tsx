import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import { ClientReview } from "./components/ClientReview";


export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      

      <ServiceSection />
      <ClientReview />
    </div>
  );
}
