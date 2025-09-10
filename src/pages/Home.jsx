import React, { useState, useEffect } from "react";

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

import firsticon from "../assets/Home/firsticon.svg";
import secondicon from "../assets/Home/secondicon.svg" ;
import thirdicon from "../assets/Home/thirdicon.svg" ;
import fourthicon from "../assets/Home/fourthicon.svg" ;
import fifthicon from "../assets/Home/fifthicon.svg" ;


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
        <section
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 md:px-16 lg:px-32"
          Chivo="Investment Bank Hero Section"
        >
          <div className="absolute inset-0 w-full h-full">
            {images.map((img, index) => {
              let opacity = 0;
              if (index === currentIndex && !isFading) opacity = 1;
              else if (index === currentIndex && isFading) opacity = 0;
              else if (index === (currentIndex + 1) % images.length && isFading)
                opacity = 1;
              return (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
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
          <div className="relative z-10 w-full text-white text-center px-4 sm:px-8 md:px-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-chivo">
              India’s Execution – Focused
            </h3>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl mx-auto mb-8">
              Investment Bank
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl mx-auto text-middle font-chivo">
              From deal structuring to closure, we bring precision and speed to your
              capital and strategic initiatives.
            </p>
            {/* Stats Cards */}
<div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-[10px] py-6">  {[
    { label: "Transactions", value: "70+",},
    { label: "Transactions Value", value: "₹183Bn+", },
    { label: "Year’s Track Record", value: "13+",  },
    { label: "Institutional Relationships", value: "90+", }
  ].map(({ label, value, icon }) => (
    <div
      key={label}
      className="flex flex-col  opacity-100"
    >
      {/* Top Part */}
      <div
        className="flex flex-row items-center justify-center"
        style={{
          width: 335,
          height: 91,
          borderRadius: 5,
          border: "1px solid rgba(255,255,255,0.30)",
          borderBottom: 0,
          padding: 10,
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.05) 100%)"
        }}
      >
        {icon}
        <span className="font-bold text-white text-4xl">{value}</span>
      </div>
      {/* Bottom Part */}
      <div
        className="flex items-center justify-center"
        style={{
          width: 335,
          height: 60,
          borderLeft: "1px solid rgba(255,255,255,0.30)",
          borderRight: "1px solid rgba(255,255,255,0.30)",
          borderBottom: "1px solid rgba(255,255,255,0.30)",
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.32) 0%,rgba(255,255,255,0.14) 100%)"
        }}
      >
        <span className="text-lg text-white w-full text-center">{label}</span>
      </div>
    </div>
  ))}
</div>
            {/* Icons */}
            {/* <div className="mt-16 flex justify-center overflow-x-automax-w-[1440px]"> */}
             <div className="w-full flex flex-wrap lg:flex-nowrap  justify-center gap-[10px] py-6">
              <div
  className="rounded-xl border border-white/10 shadow-xl flex items-stretch w-full min-w-[400px] max-w-[1400px]"
              style={{                          
                  height: 232,
                  background: "linear-gradient(90deg,rgba(255, 255, 255, 0.15) 0%,rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 6px 48px 0 rgba(226, 225, 225, 0.15)",
                }}
              >
                {[firsticon, secondicon, thirdicon , fourthicon, fifthicon].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between items-center flex-1 max-w-[1440px] mx-auto"
                  >
                    {/* ICON + HR */}
                    <div className="flex flex-col items-center pt-10 px-4">
                      <img src = {Icon} alt={`Icon ${idx + 1}`} className="w-12 h-12 mb-4" />
                      {/* <Icon
                        className="text-white mb-4 drop-shadow-lg w-10 h-10 "
                        style={{
                         
                          opacity: 1,
                          transform: "rotate(0deg)",
                        }}
                      /> */}
                      <hr className="w-4/5 border-t-[2.10px] border-white/20 my-4" />
                    </div>
                    {/* DESCRIPTION */}
                    <div className="flex-1 flex items-end pb-8 px-2 w-full">
                      <p className="text-xl md:text-1xl font-semibold text-white text-center leading-tight w-full">
                        {[
                          <>
                            30+ years of<br />experience
                          </>,
                          <>
                            Presence across<br />financial hubs
                          </>,
                          <>
                            Sector-agnostic<br />expertise
                          </>,
                          <>
                            Strong mid–large<br />deal track records
                          </>,
                          <>
                            Trusted by growth to <br />listed Companies
                          </>,
                        ][idx]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sector Grid */}
        <section className="bg-white py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-left mb-4">
            Strong Track Record Across Sectors:
          </h2>
       
            <p 
            className="mb-10 text-gray-800"
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1.7',
           
            opacity: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
            letterSpacing: 0,
          }}
            >

            With a proven track record of success, Elements Financial Solutions delivers exceptional financial solutions across diverse sectors, including Energy, Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate. Our expertise drives consistent value, empowering clients with tailored strategies for sustainable growth and resilience in dynamic markets.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-md">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="relative rounded-md bg-cover bg-center overflow-hidden min-h-[120px] sm:min-h-[160px]"
                style={{ backgroundImage: `url(${sectorImages[sector]})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
               <span className="absolute inset-0 flex items-center justify-center text-white font-semibold rounded-md px-3 sm:px-6 py-1 sm:py-2 text-center text-base sm:text-lg md:text-xl">
  {sector}
</span>

              </div>
            ))}
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 space-y-8 text-left">
              {/* Vision */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-500 text-white p-2 rounded-lg text-xl">👁️</div>
                  <h2 className="text-4xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Our mission is to guide corporations through their growth trajectory by providing tailored financial advisory services that encapsulate both economic and social dimensions.                </p>
              </div>
              {/* Mission */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-orange-500 text-white p-2 rounded-lg text-xl">📝</div>
                  <h2 className="text-4xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
Our vision is to be a global leader in financial and business advisory, creating enduring value for clients and society through strategic insight, innovation, and sustainable solutions.                </p>
              </div>
              {/* Values */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-blue-900 text-white p-2 rounded-lg text-xl">💡</div>
                  <h2 className="text-4xl sm:text-3xl font-bold text-gray-900">Our Values</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Integrity:</strong> Upholding the highest ethical standards, ensuring transparency and trust in every transaction.</li>
                  <li><strong>Excellence:</strong> Committing to superior performance, leveraging deep sector knowledge to deliver outstanding results.</li>
                  <li><strong>Innovation:</strong> Pioneering creative financial strategies to address evolving market challenges and opportunities.</li>
                  <li><strong>Collaboration:</strong> Partnering closely with clients to achieve shared goals and long-term success.</li>
                  <li><strong>Sustainability:</strong> Promoting responsible investments that drive positive impact across industries and communities.</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <img src={VisionMissionImage} alt="Vision, Mission, Values" className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto rounded" />
            </div>
          </div>
          {/* Gap between section and footer */}
          <div style={{ height: '4em' }} />
        </section>

        {/* Why EFS */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
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
            <div className="w-full max-w-[500px] lg:max-w-[510px] flex-shrink-0 mx-auto">
              <img
                src={EFSTeamImage}
                alt="EFS Team Collaboration"
                className="w-full h-[200px] sm:h-[300px] md:h-[347px] object-cover rounded-tl-[50px] rounded-br-[50px] rounded-tr-none rounded-bl-none shadow"
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
          <div style={{ height: '4em' }} />
        </section>
      </div>
    </div>
  );
}