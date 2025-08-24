"use client";
import FlipCard from "./animata/card/flip-card";
import { fadeUp } from "./howCanWeHelp";
import { motion } from "framer-motion";

function DefineServices() {
  return (
    <div className="text-center text-Light_gray px-4 py-8" id="service">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl md:text-3xl lg:text-5xl font-bold mb-12 leading-tight"
      >
        Our <span className="text-primary_green">Services</span>
      </motion.h1>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((item, idx) => (
          <motion.div key={idx} className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
            <FlipCard
              media={item.video}
              title={item.title}
              description={item.description}
              mediaType="video"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DefineServices;

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We offer advanced SEO solutions to boost your website's visibility, improve search engine rankings, and drive organic traffic that converts.",
    video: "/serviceVideos/seo.mp4",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Our Social Media Marketing strategies help you build a strong online presence, engage your audience, and grow your brand across all major platforms.",
    video: "/serviceVideos/smm.mp4",
  },
  {
    title: "Web Development",
    description:
      "From responsive design to full-stack development, we create high-performance websites tailored to your business goals and user experience.",
    video: "/serviceVideos/webdevelopment.mp4",
  },
  {
    title: "Content Writing",
    description:
      "We craft compelling, SEO-optimized content that informs, engages, and drives results—perfect for blogs, websites, and marketing campaigns.",
    video: "/serviceVideos/contentwriting.mp4",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative designs communicate your brand story effectively, using visuals that attract, inspire, and leave a lasting impression.",
    video: "/serviceVideos/graphicDesign.mp4",
  },
  {
    title: "Branding and Identity Design",
    description:
      "We help define your brand’s identity with a consistent voice, unique visuals, and a professional look that resonates with your audience.",
    video: "/serviceVideos/branding.mp4",
  }
];


