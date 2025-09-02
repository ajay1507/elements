import React, { useState } from "react";
import TransactionsImg from "../assets/Transction/Transactions.jpg";
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
    { title: "Green Energy Compressed Bio Gas (CBG)", sector: "GREEN ENERGY COMPRESSED BIO GAS (CBG)", amount: "INR: 2750 Million", deal: "Private Equity", icon: icon6 },
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
      <div
        className="relative text-white bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${TransactionsImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 max-w-7xl mx-auto">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mb-12 leading-tight max-w-4xl">
            Delivering Transformative <br /> Financial Success
          </h1>
          <div className="max-w-5xl w-full bg-black/60 backdrop-blur-md text-left p-8 sm:p-10 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Elements Financial Solutions</h2>
            <p className="text-gray-200 leading-relaxed">
              has built a distinguished track record of executing impactful transactions that drive sustainable growth and value creation for clients across sectors.
              <br /><br />
              Expertise in debt resolution, syndication, rating advisory, M&A advisory, and equity advisory delivers tailored, high-impact solutions.
              <br /><br />
              Collaborating to align every transaction with clients’ long-term goals for resilience and prosperity in global markets.
            </p>
          </div>
          <div className="mt-8">
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition">
              Explore Details ↓
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <section className="bg-[#01487A] text-white px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Powering Growth <br /> Across Industries
            </h2>
            <p className="text-lg text-gray-200 mb-12">
              Reflected in recently closed transactions with energy, clean technologies, infrastructure, and healthcare clients, showcasing commitment across sectors.
            </p>
            <button className="text-white border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#01487A] transition">
              Explore Transactions <span className="ml-2">↓</span>
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={sectionsec} alt="Powering Growth" className="w-full max-w-2xl object-contain" draggable="false" />
          </div>
        </div>
      </section>

{/* GAP: three lines tall */}
<div style={{ height: '4.5em' }} />

      {/* Third Section */}
      <section className="w-full flex flex-col items-center" style={{ minHeight: 93 }}>
        <h2
          className="text-5xl font-extrabold mb-6"
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            width: '1400px',
            textAlign: 'left',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Our Transactions
        </h2>
        <p
          className="mb-10 text-gray-800"
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1.7',
            width: '1400px',
            opacity: 1,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
            letterSpacing: 0,
          }}
        >
          Elements Financial Solutions Private Limited (EFS) has delivered high-impact transactions for leaders in Real Estate, E–Mobility, IMFL, Consumer Electricals, Green Energy, and more. Equity deals span Healthcare, Hospitality, Sea Foods, Oleochemicals, EVs, CBG. Ongoing projects span Renewable Energy, Textiles, Pharmaceuticals, Road EPC, Power, Real Estate, Hygiene Products, Steel Pipes, and IT. With tailored expertise, EFS drives sustainable success globally.
        </p>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-12mx-auto max-w-7xl">
          {["concluded", "equity", "ongoing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center text-lg font-semibold uppercase transition-colors border-b-2 ${
                activeTab === tab ? "border-[#00B3FF] text-[#00B3FF]" : "border-transparent text-gray-400"
              }`}
            >
              {tab === "concluded" ? "Concluded Transactions" : tab === "equity" ? "Equity Transactions" : "Ongoing Transactions"}
            </button>
          ))}
        </div>

        {/* Transaction list */}
        {activeTab === "concluded" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {concludedTransactions.map(({ title, sector, amount, deal, icon }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img src={icon} alt={`${sector} icon`} className="mb-5 w-[74px] h-[74px] object-contain" draggable="false" />
                <div className="text-[#11BC34] font-bold uppercase mb-5 text-[17px] tracking-tight">{sector}</div>
                <div className="bg-[#F6F7FA] rounded-[24px] px-8 py-7 w-full max-w-[370px] text-left shadow-none">
                  <h3 className="font-semibold text-[18px] mb-2 leading-tight">{title}</h3>
                  <ul className="ml-3 list-disc text-gray-800 text-[15px] space-y-1">
                    <li>{amount}</li>
                    <li>Deal: {deal}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "equity" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            {equityTransactions.map(({ title, sector, amount, deal, icon }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={icon}
                  alt={`${sector} icon`}
                  className="mb-5 w-[74px] h-[74px] object-contain"
                  draggable="false"
                />
                <div className="text-[#11BC34] font-bold uppercase mb-5 text-[17px] tracking-tight">{sector}</div>
                <div className="bg-[#F6F7FA] rounded-[24px] px-8 py-7 w-full max-w-[370px] text-left shadow-none">
                  <h3 className="font-semibold text-[18px] mb-2 leading-tight">{title}</h3>
                  <ul className="ml-3 list-disc text-gray-800 text-[15px] space-y-1">
                    <li>{amount}</li>
                    <li>Deal: {deal}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ongoing" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {ongoingTransactions.map(({ title, sector, amount, icon }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={icon}
                  alt={`${sector} icon`}
                  className="mb-5 w-[74px] h-[74px] object-contain"
                  draggable="false"
                />
                <div className="text-[#11BC34] font-bold uppercase mb-5 text-[17px] tracking-tight">{sector}</div>
                <div className="bg-[#F6F7FA] rounded-[24px] px-8 py-7 w-full max-w-[370px] text-left shadow-none">
                  <h3 className="font-semibold text-[18px] mb-2 leading-tight">{title}</h3>
                  <ul className="ml-3 list-disc text-gray-800 text-[15px] space-y-1">
                    <li>{amount}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
