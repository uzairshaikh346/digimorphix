// components/HowCanWeHelp.tsx
import Image from "next/image";
import Link from "next/link";

const HowCanWeHelp = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ff00] mb-4">
            How Can We Help You?
          </h2>
          <p className="text-lg mb-6">
            At MarketiX, we are here to support your digital journey every step of the way.
            Whether you are looking to improve your website's SEO, run targeted ad campaigns,
            or design a standout brand identity — we have got you covered.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-300">
            <li>Need a new website?</li>
            <li>Want to rank higher on Google?</li>
            <li>Looking to increase sales through social media?</li>
            <li>Want to build your online store?</li>
          </ul>
          <Link href="/contact">
          <button className="mt-6 bg-[#00ff00] hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
            Lets Talk
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/digitalSupport.jpg" // 💡 Replace with your actual image path
            alt="Digital support illustration"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HowCanWeHelp;

