import React from 'react';

const services = [
  {
    title: "SEO",
    description: "Boost your website's visibility and rank higher on search engines with advanced optimization techniques, keyword research, technical SEO, and content strategy. We ensure long-term organic traffic growth and better search rankings."
  },
  {
    title: "SMM",
    description: "Enhance brand awareness and audience engagement with targeted social media campaigns across all major platforms. Our data-driven approach helps you connect with your audience, increase reach, and drive meaningful interactions through compelling content and paid promotions."
  },
  {
    title: "Web Development",
    description: "Build high-performance, responsive websites tailored to your business needs with cutting-edge technology. We create custom websites, e-commerce solutions, and web applications that are optimized for speed, security, and user experience."
  },
  {
    title: "Content Writing",
    description: "Create compelling, SEO-optimized content to attract, inform, and convert visitors into loyal customers. From blogs and website copy to email campaigns and social media content, our expert writers craft messages that resonate with your target audience."
  },
  {
    title: "Graphic Design",
    description: "Design visually stunning graphics, logos, and branding materials to enhance your business identity. Our creative team develops professional designs for websites, social media, marketing materials, and more to make your brand stand out."
  },
  {
    title: "Branding & Identity",
    description: "Develop a strong and recognizable brand identity with professional logo design, color schemes, typography, and brand messaging. We help businesses build a unique and memorable brand that connects with their audience."
  },
  {
    title: "PPC Advertising",
    description: "Maximize your ROI with data-driven paid advertising campaigns that drive high-quality leads and conversions. We specialize in Google Ads, social media ads, and retargeting strategies to help you reach the right audience and grow your business."
  },
  {
    title: "Email Marketing",
    description: "Engage your audience with personalized email campaigns and automation for better customer retention. We create tailored email strategies, design captivating newsletters, and optimize campaigns to improve open rates, click-through rates, and conversions."
  },
  {
    title: "E-commerce Solutions",
    description: "Optimize your online store with seamless integrations, user-friendly design, and powerful marketing strategies. From Shopify to WooCommerce and custom e-commerce platforms, we provide end-to-end solutions that improve sales and user experience."
  }
];

function ServicesSection() {
  return (
    <div className='bg-black'>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-950 bg-opacity-75 px-8 pt-16 border-[1px] border-[#00FF00] pb-24 hover:border-[2px] rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-[#00FF00] mb-3">
                    {service.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-start">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;