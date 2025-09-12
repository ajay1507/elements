import React, { useState } from "react";

import TransactionsImg from "../assets/Transction/TransactionsImg.jpg";
import sectionsec from "../assets/Transction/sectionsec.png";

import icon1 from "../assets/Transction/icon1.svg";
import icon2 from "../assets/Transction/icon2.svg";
import icon3 from "../assets/Transction/icon3.svg";
import icon4 from "../assets/Transction/icon4.svg";
import icon5 from "../assets/Transction/icon5.svg";
import icon6 from "../assets/Transction/icon6.svg";
import icon7 from "../assets/Transction/icon7.svg";
import icon8 from "../assets/Transction/icon8.svg";
import icon9 from "../assets/Transction/icon9.svg";
import icon10 from "../assets/Transction/icon10.svg";
import icon11 from "../assets/Transction/icon11.svg";
import icon12 from "../assets/Transction/icon12.svg";
import icon13 from "../assets/Transction/icon13.svg";
import icon14 from "../assets/Transction/icon14.svg";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("concluded");

  const concludedTransactions = [
    { title: "Leading Real State Development", sector: "REAL ESTATE", amount: "INR: 5000 Million", deal: "Project Finance", icon: icon7 },
    { title: "Leading E-Mobility Platform", sector: "LOGISTICS & INFRASTRUCTURE", amount: "INR: 10 Billion", deal: "Growth Funding", icon: icon2 },
    { title: "Leading IMFL Manufacturer", sector: "IMFL MANUFACTURER", amount: "INR: 2500 Million", deal: "Refinance & Acquisition Funding", icon: icon7 },
    { title: "Consumer Electrical Appliances", sector: "MANUFACTURING", amount: "INR: 1190 Million", deal: "Growth Funding & Listed NCD", icon: icon5 },
    { title: "Leading Sustainable Green Energy Company", sector: "RENEWABLE ENERGY", amount: "INR: 10 Billion", deal: "Acquisition Funding", icon: icon1 },
    { title: "Ethanol and Sewage Treatment Company", sector: "CLEAN ENERGY", amount: "INR: 2200 Million", deal: "Fresh Funding", icon: icon4 },
  ];

  const equityTransactions = [
    { title: "Consumer Electrical Appliances", sector: "CONSUMER ELECTRICAL APPLIANCES", amount: "INR: 300 Million", deal: "Pre IPO", icon: icon1 },
    { title: "Sea Foods", sector: "SEA FOODS", amount: "INR: 200 Million", deal: "Pre IPO", icon: icon11 },
    { title: "Hospitality", sector: "HOSPITALITY", amount: "INR: 3500 Million", deal: "Pre IPO & IPO", icon: icon9 },
    { title: "Healthcare", sector: "HEALTHCARE", amount: "INR: 3750 Million", deal: "Pre IPO & IPO", icon: icon4 },
    { title: "Oleochemical Manufacturer", sector: "OLEOCHEMICAL MANUFACTURER", amount: "INR: 5000 Million", deal: "Equity Secondary", icon: icon3 },
    { title: "EV Transportation Platform", sector: "EV TRANSPORTATION PLATFORM", amount: "INR: 1000 Million", deal: "Equity", icon: icon6 },
    { title: "Green Energy Compressed Bio Gas (CBG)", sector: "GREEN ENERGY COMPRESSED BIO GAS ", amount: "INR: 2750 Million", deal: "Private Equity", icon: icon6 },
  ];

  const ongoingTransactions = [
    { title: "Renewable Energy (BIO-CBG & THERMAL)", sector: "RENEWABLE ENERGY (BIO-CBG & THERMAL)", amount: "INR: 15 Billion", icon: icon1 },
    { title: "Textiles – Cotton Yarn", sector: "TEXTILES – COTTON YARN", amount: "INR: 1,800 Million", icon: icon2 },
    { title: "Oleochemical Manufacturer", sector: "OLEOCHEMICAL MANUFACTURER", amount: "INR: 5,000 Million", icon: icon3 },
    { title: "Pharmaceuticals", sector: "PHARMACEUTICALS", amount: "INR: 1,000 Million", icon: icon4 },
    { title: "Road - EPC", sector: "ROAD - EPC", amount: "INR: 12 Billion", icon: icon5 },
    { title: "Power Sector", sector: "POWER SECTOR", amount: "INR: 72 Billion", icon: icon6 },
    { title: "Real Estate Developer", sector: "REAL ESTATE DEVELOPER", amount: "INR: 8,000 Million", icon: icon7 },
    { title: "Hygiene Products (Baby, Feminine & Adult)", sector: "HYGIENE PRODUCTS (BABY, FEMININE & ADULT)", amount: "INR: 2,000 Million", icon: icon8 },
    { title: "Hospitality", sector: "HOSPITALITY", amount: "INR: 3,000 Million", icon: icon9 },
    { title: "Steel Pipes Manufacturer", sector: "STEEL PIPES MANUFACTURER", amount: "INR: 2,500 Million", icon: icon10 },
    { title: "Sea Foods", sector: "SEA FOODS", amount: "INR: 2,100 Million", icon: icon11 },
    { title: "IT Sector", sector: "IT SECTOR", amount: "INR: 6,000 Million", icon: icon12 },
  ];


  return (
    <div className="min-h-screen">
      {/* First Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 md:px-16 lg:px-32"
        style={{
          backgroundImage: `url(${TransactionsImg})`,
          marginBottom: 0,
          paddingBottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-8 md:px-16 py-16 sm:py-5 min-h-[50px]"></div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Chivo text-white text-center drop-shadow-lg mb-8 sm:mb-12 lg:mb-16">
            Delivering Transformative <br /> Financial Success
          </h1>

          <div
            className="text-white border border-white/10 shadow-2xl backdrop-blur-lg bg-black/30 w-full max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-[1342px] rounded-[30px] p-4 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8 justify-center items-start"
            style={{
              opacity: 1,
              boxSizing: "border-box",
            }}
          >
            <h2 
            className="text-3xl md:text-4xl font-Chivo mb-2 text-white
            ">
              Elements Financial Solutions
            </h2>
            <p className="mb-4 text-lg leading-relaxed font-Albert Sans text-white/90" style={{ marginTop: 0 }}>
              has built a distinguished track record of executing impactful transactions that drive sustainable growth and value creation for clients across Energy, Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate. Our expertise in debt resolution, debt syndication, rating advisory, M&A advisory, and equity advisory enables us to deliver tailored, high-impact solutions that address complex financial challenges. By leveraging deep industry knowledge, strategic partnerships with leading institutions, and a commitment to innovation, EFS has successfully facilitated transformative deals, including restructurings, capital raises, acquisitions, and rating enhancements. Our collaborative approach ensures that every transaction aligns with our clients’ long-term goals, fostering resilience and prosperity in both local and global markets.
            </p>
          </div>

          <button className="mt-8 px-10 py-3 rounded-full bg-black/10 backdrop-blur-md text-white hover:bg-black/20 border border-white/10 transition flex items-center gap-2 shadow-lg text-lg font-medium max-w-max mx-auto">
            Explore More About Us
          </button>
        
      </section>

      {/* Second Section */}
      <section className="bg-[#01487A] text-white px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl font-Chivo mb-6 leading-tight">
              Powering Growth <br /> Across Industries
            </h2>
            <p className="text-lg text-gray-200 mb-12">
Our expertise in structured finance is reflected in recently closed transactions with a Sustainable Green Energy Company, an Ethanol & Sewage Treatment firm, and equity investments in Healthcare, Oleochemicals, and Hospitality. These deals demonstrate our commitment to fostering growth in both traditional and emerging sectors.            </p>
            <button className="text-white border border-white rounded-full px-4 py-3 hover:bg-white hover:text-[#01487A] transition">
              Explore Transactions <span className="ml-2">↓</span>
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={sectionsec} alt="Powering Growth" className="w-full max-w-2xl object-contain" draggable="false" />
          </div>
        </div>
      </section>

      <div style={{ height: '4.5em' }} />

      <section className="w-full bg-white py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] 2xl:px-[240px]">
        <div className="max-w-[1500px] mx-auto py-10 sm:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-Chivo text-gray-900 mb-3 text-left">
            Our Transactions
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

Elements Financial Solutions Private Limited (EFS) has delivered high-impact transactions for leaders in Real Estate, E-Mobility, IMFL, Consumer Electricals, Green Energy, and Ethanol. Our equity deals include Healthcare, Hospitality, Sea Foods, Oleochemicals, EVs, and CBG. Ongoing projects span Renewable Energy, Textiles, Pharmaceuticals, Road EPC, Power, Real Estate, Hygiene Products, Steel Pipes, Sea Foods, and IT. With tailored expertise, EFS drives sustainable success globally.          </p>

          <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 mb-12 overflow-x-auto">
            {["concluded", "equity", "ongoing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[160px] py-2 text-center text-base sm:text-lg font-Chivo uppercase transition-colors border-b-2
                  ${activeTab === tab ? "border-[#00B3FF] text-[#00B3FF]" : "border-transparent text-gray-400"}
                `}
                style={{ flexBasis: "0 0 auto" }}
              >
                {tab === "concluded"
                  ? "Concluded Transactions"
                  : tab === "equity"
                  ? "Equity Transactions"
                  : "Ongoing Transactions"}
              </button>
            ))}
          </div>

          {/* Transaction lists grid for each tab */}

          {activeTab === "concluded" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mb-20">
              {concludedTransactions.map(({ title, sector, amount, deal, icon }, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-full max-w-xs mx-auto">
                  <img src={icon} alt={`${sector} icon`} className="mb-5 w-20 h-20 object-contain" draggable="false" />
                  <div className="text-[#11BC34] font-Chivo uppercase mb-5 text-lg tracking-tight">{sector}</div>
                  <div className="bg-[#F6F7FA] rounded-3xl px-6 py-7 w-full text-left shadow-none">
                    <h3 className="font-Albert Sans text-lg mb-2 leading-tight">{title}</h3>
                    <ul className="ml-4 list-disc text-gray-800 text-base space-y-1">
                      <li>{amount}</li>
                      <li>Deal: {deal}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "equity" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-20">
              {equityTransactions.map(({ title, sector, amount, deal, icon }, idx) => {
                const displayedIcon =
                  sector === "EV TRANSPORTATION PLATFORM" ? icon14 :
                  sector === "GREEN ENERGY COMPRESSED BIO GAS " ? icon13 : icon;

                return (
                  <div key={idx} className="flex flex-col items-center text-center w-full max-w-xs mx-auto">
                    <img
                      src={displayedIcon}
                      alt={`${sector} icon`}
                      className="mb-5 w-20 h-20 object-contain"
                      draggable="false"
                    />
                    <div className="text-[#11BC34] font-chivo uppercase mb-5 text-lg tracking-tight">{sector}</div>
                    <div className="bg-[#F6F7FA] rounded-3xl px-6 py-7 w-full text-left shadow-none">
                      <h3 className="font-Albert Sans text-lg mb-2 leading-tight">{title}</h3>
                      <ul className="ml-4 list-disc text-gray-800 text-base space-y-1">
                        <li>{amount}</li>
                        <li>Deal: {deal}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "ongoing" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-20">
              {ongoingTransactions.map(({ title, sector, amount, icon }, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-full max-w-xs mx-auto">
                  <img
                    src={icon}
                    alt={`${sector} icon`}
                    className="mb-5 w-20 h-20 object-contain"
                    draggable="false"
                  />
                  <div className="text-[#11BC34] font-chivo uppercase mb-5 text-lg tracking-tight">{sector}</div>
                  <div className="bg-[#F6F7FA] rounded-3xl px-6 py-7 w-full text-left shadow-none">
                    <h3 className="font-Albert Sans text-lg mb-2 leading-tight">{title}</h3>
                    <ul className="ml-4 list-disc text-gray-800 text-base space-y-1">
                      <li>{amount}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div style={{ height: '4.5em' }} />
    </div>
  );
}
