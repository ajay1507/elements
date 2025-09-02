import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaNetworkWired,
  FaChartPie,
  FaListUl,
  FaChartLine,
} from "react-icons/fa";
// Import images
import BGimage1 from "../assets/Home/BGimage.jpg";
import BGimage2 from "../assets/Home/2BGimage.jpg";
import Energy from "../assets/Home/Energy.jpg";
import Industrials from "../assets/Home/Industrials.jpg";
import Utilities from "../assets/Home/Utilities.jpg";
import Healthcare from "../assets/Home/Healthcare.png";
import Financials from "../assets/Home/Financials.jpg";
import ConsumerDiscretionary from "../assets/Home/ConsumerDiscretionary.png";
import ConsumerStaples from "../assets/Home/ConsumerStaples.jpg";
import InformationTechnology from "../assets/Home/InformationTechnology.png";
import CommunicationServices from "../assets/Home/CommunicationServices.jpg";
import RealEstate from "../assets/Home/RealEstate.png";
import VisionMissionImage from "../assets/Home/version.png";
import EFSTeamImage from "../assets/Home/efs-team.png";

export default function Home() {
  const images = [BGimage1, BGimage2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const holdTimeout = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const fadeTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, 5000);

    return () => {
      clearTimeout(holdTimeout);
      clearTimeout(fadeTimeout);
    };
  }, [currentIndex]);

  const sectorImages = {
    Energy,
    Industrials,
    Utilities,
    Healthcare,
    Financials,
    "Consumer Discretionary": ConsumerDiscretionary,
    "Consumer Staples": ConsumerStaples,
    "Information Technology": InformationTechnology,
    "Communication Services": CommunicationServices,
    "Real Estate": RealEstate,
  };

  const sectors = [
    "Energy",
    "Industrials",
    "Utilities",
    "Healthcare",
    "Financials",
    "Consumer Discretionary",
    "Consumer Staples",
    "Information Technology",
    "Communication Services",
    "Real Estate",
  ];

  return (
    <div className="text-gray-900">
      <div className="flex flex-col space-y-40">
        {/* Investment Bank Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            {images.map((img, index) => {
              let opacity = 0;
              if (index === currentIndex && !isFading) {
                opacity = 1;
              } else if (index === currentIndex && isFading) {
                opacity = 0;
              } else if (index === (currentIndex + 1) % images.length && isFading) {
                opacity = 1;
              }
              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  style={{
                    opacity,
                    transition: "opacity 4s ease-in-out",
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    willChange: "opacity",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                  }}
                />
              );
            })}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg sm:text-xl md:text-2xl">India’s Execution – Focused</h3>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-2">Investment Bank</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl mx-auto">
              From deal structuring to closure, we bring precision and speed to your capital and strategic initiatives.
            </p>
          </div>

          {/* Stats */}
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center w-full max-w-5xl px-4 sm:px-8">
            {[
              { label: "Transactions", value: "70+" },
              { label: "Transactions Value", value: "₹183Bn+" },
              { label: "Year’s Track Record", value: "13+" },
              { label: "Institutional Relationships", value: "90+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="w-full sm:w-60 flex flex-col border border-white/30 rounded-xl overflow-hidden mx-auto"
              >
                {/* Value Section */}
                <div className="flex-1 flex items-center justify-center bg-black/200 backdrop-blur-md p-6">
                  <h2 className="text-4xl sm:text-[2.7rem] font-bold text-white">{value}</h2>
                </div>

                {/* Label Section */}
                <div className="bg-black/30 backdrop-blur-md p-5">
                  <p className="text-lg text-white">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="relative mt-16 bg-black bg-opacity-10 rounded-xl py-12 px-8 text-white w-full max-w-5xl mx-auto backdrop-blur-md border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {[FaUsers, FaNetworkWired, FaChartPie, FaListUl, FaChartLine].map(
                (Icon, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-4">
                    <Icon className="text-3xl" />
                    <hr className="w-12 border-white/30" />
                    <p className="text-base">
                      {[
                        "30+ years of experience",
                        "Presence across financial hubs",
                        "Sector-agnostic expertise",
                        "Strong mid-large deal track records",
                        "Trusted by growth to listed Companies",
                      ][idx]}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Sector Grid */}
        <section className="w-full py-6 bg-white flex justify-center px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="w-full max-w-[1400px]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 text-left">
              Strong Track Record Across Sectors:
            </h2>
            <p className="text-left mt-2 text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-5xl">
              With a proven track record of success, Elements Financial Solutions delivers exceptional financial solutions across diverse sectors, including Energy, Materials,
              Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate.
              Our expertise drives consistent value, empowering clients with tailored strategies for sustainable growth and resilience in dynamic markets.
            </p>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(1, 1fr)",
                // gridTemplateRows: "repeat(2, 1fr)",
                gap: "3px",
                width: "100%",
                minHeight: "449px",
                height: "auto",
              }}
            >
              <style>
                {`
                  @media (min-width: 640px) {
                    div[data-sector-grid] {
                      grid-template-columns: repeat(2, 1fr);
                      grid-template-rows: repeat(2, 1fr);
                    }
                  }
                  @media (min-width: 1024px) {
                    div[data-sector-grid] {
                      grid-template-columns: repeat(5, 1fr);
                      grid-template-rows: repeat(2, 1fr);
                    }
                  }
                `}
              </style>
              <div data-sector-grid className="grid gap-3 w-full">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className="relative flex items-center justify-center bg-center bg-cover overflow-hidden rounded-md"
                    style={{
                      backgroundImage: `url(${sectorImages[sector]})`,
                      minHeight: "223.5px",
                      height: "100%",
                      borderRadius: "0",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/45 rounded-md" />
                    <span className="relative z-10 text-white text-xl sm:text-2xl font-semibold text-center px-4 py-2 bg-black/30 rounded-2xl backdrop-blur-sm shadow">
                      {sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-14">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Our Vision */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-500 text-white p-2 rounded-lg text-xl">👁️</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Our mission is to guide corporations through their growth trajectory by providing tailored financial advisory services
                  that encapsulate both economic and social dimensions.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-orange-500 text-white p-2 rounded-lg text-xl">📝</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Our vision is to be a global leader in financial and business advisory, creating enduring value for clients and society
                  through strategic insight, innovation, and sustainable solutions.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-900 text-white p-2 rounded-lg text-xl">💡</div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Values</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base sm:text-lg">
                  <li><strong>Integrity:</strong> Upholding the highest ethical standards, ensuring transparency and trust in every transaction.</li>
                  <li><strong>Excellence:</strong> Committing to superior performance, leveraging deep sector knowledge to deliver outstanding results.</li>
                  <li><strong>Innovation:</strong> Pioneering creative financial strategies to address evolving market challenges and opportunities.</li>
                  <li><strong>Collaboration:</strong> Partnering closely with clients to achieve shared goals and long-term success.</li>
                  <li><strong>Sustainability:</strong> Promoting responsible investments that drive positive impact across industries and communities.</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={VisionMissionImage}
                alt="Vision, Mission, and Values"
                className="w-full rounded"
              />
            </div>
          </div>
        </section>

       {/* Why EFS Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left: Text */}
    <div className="flex-1">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-1">
        Why <br />Elements Financial Solutions (EFS)
      </h2>
      <p className="font-semibold text-gray-900 mt-4 mb-7">
        Choosing Elements Financial Solutions offers numerous benefits for businesses seeking comprehensive financial expertise and strategic support. Here’s why you should consider partnering with us:
      </p>
      {/* Points 1-3 */}
      <ul className="list-disc pl-6 space-y-4 text-base text-gray-900">
        <li>
          <strong>1. Expert Guidance:</strong> Our team comprises seasoned professionals with extensive experience in financial advisory, ensuring you receive knowledgeable and effective solutions tailored to your unique needs.
        </li>
        <li>
          <strong>2. Comprehensive Services:</strong> From credit rating advisory to structured and private credit financing, we provide a full suite of services that cover every aspect of corporate finance, helping businesses optimize their financial operations and maximize growth opportunities.
        </li>
        
      </ul>
      {/* Points 4-6 and Closing */}
      
    </div>
    {/* Right: Image */}
    <div className="w-full max-w-[500px] lg:max-w-[510px] flex-shrink-0">
      <img
        src={EFSTeamImage}
        alt="EFS Team Collaboration"
        className="w-full h-[347px] object-cover rounded-tl-[50px] rounded-br-[50px] rounded-tr-none rounded-bl-none shadow"
        style={{ maxWidth: "510px", maxHeight: "347px" }}
      />
    </div>
  </div>
  <ul className="list-disc pl-6 space-y-4 text-base text-gray-900 mt-8">
            <li>
          <strong>3. Customized Solutions:</strong> We understand that each client has unique challenges and goals. Our approach is to craft personalized strategies that align with your specific business objectives and market conditions.
        </li>

        <li>
          <strong>4. Strategic Partnerships:</strong> With strong relationships in the banking and finance industry, we facilitate enhanced access to capital, better financing terms, and strategic partnerships that can propel your business forward.
        </li>
        <li>
          <strong>5. Proven Track Record:</strong> Backed by years of success, our firm has a proven track record of delivering results, from improving credit ratings to securing substantial funding for complex projects.
        </li>
        <li>
          <strong>6. Commitment to Client Success:</strong> At Elements Financial Solutions, your success is our priority. We are dedicated to providing the support and resources necessary to navigate financial complexities and achieve lasting success.
        </li>
        <li>
          Choosing us means partnering with a leader in financial advisory committed to delivering excellence and driving significant value for your business.
        </li>
      </ul>
</section>
      </div>
    </div>
  );
}
