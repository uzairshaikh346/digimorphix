import { link } from "fs";
import { HoverEffect } from "./ui/card-hover-effect";

export function ServiceSection() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <h1 className="text-3xl font-bold text-center text-[#00FF00]">Our Services</h1>
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "SEO",
    description: "Boost your website's visibility and rank higher on search engines with advanced on-page and off-page optimization, keyword research, and technical SEO strategies.",
    link:"/"
  },
  {
    title: "SMM",
    description: "Engage and grow your audience with targeted social media strategies, creative content, and data-driven campaigns across all major platforms.",
    link:"/"
  },
  {
    title: "Web Development",
    description: "Design and build responsive, high-performance websites tailored to your business needs, ensuring seamless user experience and scalability.",
    link:"/"
  },
  {
    title: "Content Writing",
    description: "Create compelling and SEO-optimized content that enhances brand credibility, attracts visitors, and drives conversions effectively.",
    link:"/"
  },
  {
    title: "Graphic Design",
    description: "Craft visually stunning and professionally designed graphics, logos, and branding materials to enhance your brand identity.",
    link:"/"
  },
  {
    title: "Branding & Identity",
    description: "Develop a strong brand identity with a unique logo, brand messaging, and a consistent visual style that leaves a lasting impression.",
    link:"/"
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Maximize your ROI with highly targeted and optimized paid advertising campaigns that drive high-quality traffic and conversions.",
    link:"/"
  },
  {
    title: "Email Marketing",
    description: "Engage your audience with personalized email campaigns, automation, and newsletters designed to increase customer retention and brand loyalty.",
    link:"/"
  },
  {
    title: "E-commerce Solutions",
    description: "Build and optimize e-commerce platforms with seamless payment integration, user-friendly design, and marketing automation for enhanced sales.",
    link:"/"
  }
];
