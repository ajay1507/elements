import React, { useState } from "react";
import Servicebg from "../assets/Service/Servicesbg.jpg";
import secimg from "../assets/Service/secimg.png";
import servicebg1 from "../assets/Service/servicebg1.svg";
import Dept from "../assets/Service/Dept.png";
import Equity from "../assets/Service/Equity.png";
import Msa from "../assets/Service/msa.png";
import Rating from "../assets/Service/Rating.png";

const serviceImages = [Servicebg, secimg, Servicebg, Servicebg];

const services = [
  {
    title: "Debt Advisory",
    points: [
      "Project Financing",
      "Term Loan / LAS / LAP",
      "Working Capital Financing",
      "Bridge / Mezzanine Finance",
      "Structured Debt Financing",
      "Performing Credit Financing",
      "Distress Asset Financing",
    ],
    description: `At Elements Financial Solutions, our Debt Advisory practice is designed to unlock growth, liquidity, and sustainability for businesses across sectors. Whether you’re looking to fund expansion, refinance existing debt, or resolve stressed assets, we offer end-to-end support across the entire credit lifecycle. We engage closely with promoters, CFOs, and institutional stakeholders to structure, syndicate, and execute optimal financing strategies tailored to business needs and market conditions.`,
  },
  {
    title: "Equity Advisory",
    points: [
      "IPO",
      "Pre-IPO",
      "Quasi Equity",
      "Private Equity",
      "Stake Sale",
      "Venture Capital",
      "Buy Backs",
    ],
    description: `At Elements Financial Solutions, we empower businesses to unlock value, scale operations, and achieve liquidity through tailored equity advisory solutions. Whether you’re looking to raise growth capital, optimize shareholder structure, or prepare for a public offering, our deep expertise ensures a seamless capital journey. We bring together investor insights, sector intelligence, and strategic structuring to deliver capital that aligns with your business goals — and your vision.`,
  },
  {
    title: "M & A Advisory",
    points: [
      "Buy-side Advisory",
      "Sell-side Advisory",
      "Valuation Support",
      "Due Diligence",
      "Deal Structuring",
      "Integration Planning",
    ],
    description:
      "At Elements Financial Solutions, our M&A Advisory team supports businesses through the entire merger and acquisition lifecycle—from strategic assessment and valuation to negotiation and post-deal integration. We help unlock value, mitigate risks, and drive successful transactions that align with your long-term goals.",
  },
  {
    title: "Credit Rating Advisory",
    points: [
      "Credit Rating Assessment",
      "Rating Agency Coordination",
      "Financial Strategy Consultancy",
      "Risk Management Advisory",
      "Improving Creditworthiness",
    ],
    description:
      "Our Credit Rating Advisory services at Elements Financial Solutions focus on helping businesses understand, improve, and manage their credit ratings. We provide expert guidance on rating agency processes, financial disclosures, and strategic planning to enhance credit profiles and optimize borrowing costs.",
  },
];

export default function Service() {
  const [activeTab, setActiveTab] = useState(0);
  const [showOfferings, setShowOfferings] = useState(false);
  const current = services[activeTab];

  const toggleOfferings = () => {
    setShowOfferings(!showOfferings);
  };

  return (
    <>
      {/* First Section with Background Image dynamically set */}
      <section
        className="relative w-full flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${serviceImages[activeTab] || Servicebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label={`Background image for ${current.title}`}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content area */}
        <div className="relative z-10 flex flex-col items-center w-full h-full py-16 px-4">
          <h1
            className="text-white text-6xl font-extrabold text-center leading-tight mb-10"
            style={{ textShadow: "0 4px 24px #111" }}
          >
            Empowering <br /> Sustainable Growth
          </h1>

          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 w-full max-w-5xl text-center mb-12 border border-white/30 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Elements Financial Solutions</h2>
            <p className="text-lg md:text-xl leading-relaxed font-normal">
              Offers a comprehensive suite of financial and business advisory services designed to empower clients across diverse sectors, including Energy,
              Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services,
              and Real Estate. Our tailored solutions, encompassing strategic planning, financial restructuring, and economic analysis, are crafted to transform
              challenges into opportunities, fostering sustainable growth and resilience. By combining deep industry expertise with a commitment to innovation and
              collaboration, EFS delivers impactful strategies that maximize value and drive long-term success for businesses in both local and global markets.
            </p>
          </div>
          <div className="p-2 w-full max-w-5xl text-center mb-12">
            <img src={servicebg1} alt="EFS Logo" className="inline-block max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Intro Text Section full screen */}
      <section className="w-full min-h-screen bg-white flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl mx-auto px-6">
          <div className="md:w-full">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Comprehensive Financial <br /> Solutions for Sustainable Growth
            </h1>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl">
              At Elements Financial Solutions Private Limited (EFS), we deliver a dynamic suite of financial and business advisory services tailored to empower clients across Energy,
              Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate.
              With a commitment to innovation, collaboration, and sustainability, our solutions transform challenges into opportunities, driving resilience and long-term success. From debt
              resolution to equity advisory, our services are designed to meet the unique needs of corporates, SMEs, and mid-sized businesses, ensuring optimal financial strategies and
              impactful outcomes in both local and global markets.
            </p>
            <button
              className="mt-8 text-lg font-light flex items-center gap-2 text-gray-600 hover:text-gray-900"
              aria-label="Explore Offering Details"
            >
              Explore Offering Details <span style={{ fontSize: "24px" }}>↓</span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={secimg}
              alt="Illustration representing financial solutions"
              className="rounded-xl shadow-0g object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Tabbed Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto bg-white">
        <h1 className="text-4xl font-extrabold text-black mb-6">Services We Offer</h1>
        <div className="flex space-x-10 border-b border-gray-200 mb-10 overflow-x-auto" role="tablist" aria-label="Financial Services Tabs">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setShowOfferings(false);
              }}
              className={`pb-3 text-base sm:text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === index ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400 hover:text-gray-600"
              }`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div
          className="flex flex-col md:flex-row gap-10 items-start"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
        >
          {/* LEFT SIDE: Service Points & Description */}
          <div className="md:w-1/2">
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-base mb-6">
              {current.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">{current.description}</p>
            <button
              onClick={toggleOfferings}
              className="flex items-center gap-2 border border-gray-400 rounded-full px-6 py-2 text-sm sm:text-base hover:border-gray-900 hover:text-black transition"
              aria-label={`View offerings for ${current.title}`}
            >
              {showOfferings ? "" : "View Our Offerings"}{" "}
              <span className="text-xl">{showOfferings ? "" : "↓"}</span>
            </button>

            {showOfferings && (
  <div className="mt-12 flex flex-col items-stretch w-full min-h-screen">
    <ul className="w-full bg-white p-8 space-y-8">
      <li>
        <strong className="text-lg font-bold mr-2">Project Financing:</strong>
        <span className="text-gray-700">
          End-to-end advisory for infrastructure, industrial, and capital-intensive projects — from financial closure to execution — with a focus on viability, risk mitigation, and long-term funding.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Working Capital Financing:</strong>
        <span className="text-gray-700">
          Solutions to optimize day-to-day liquidity through structured working capital limits, cash flow-backed instruments, and bank financing to ensure smooth business continuity.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Structured Debt Financing:</strong>
        <span className="text-gray-700">
          Custom-crafted instruments including NCDs, CCDs, promoter funding, and other hybrid models to meet complex capital requirements across growth and consolidation stages.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Distressed Asset Financing:</strong>
        <span className="text-gray-700">
          Advisory for turnaround capital, one-time settlement (OTS) deals, and investor sourcing for stressed businesses, enabling resolution and recovery strategies under regulatory frameworks.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Term Loans / LAS / LAP:</strong>
        <span className="text-gray-700">
          Support in securing long-term loans, Loan Against Shares (LAS), and Loan Against Property (LAP), aligned with collateral and cash flow profiles to reduce financing costs.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Bridge / Mezzanine Finance:</strong>
        <span className="text-gray-700">
          Short- to medium-term funding solutions to bridge capital gaps during acquisitions, expansions, or IPOs — structured for speed, flexibility, and minimal equity dilution.
        </span>
      </li>
      <li>
        <strong className="text-lg font-bold mr-2">Performing Credit Financing:</strong>
        <span className="text-gray-700">
          Debt solutions for businesses with strong balance sheets and predictable cash flows, targeting competitive terms for refinancing, capex, and acquisition-led growth.
        </span>
      </li>
    </ul>
    <button
      onClick={toggleOfferings}
      style={{
        width: 309,
        height: 68,
        borderRadius: 50,
        borderWidth: 1,
        paddingTop: 10,
        paddingRight: 30,
        paddingBottom: 10,
        paddingLeft: 30,
        gap: 10,
        opacity: 1,
      }}
      className="mt-8 border border-gray-400 text-lg font-normal text-gray-800 bg-white hover:text-black hover:border-black transition"
    >
      Close
    </button>
  </div>
)}

          </div>

          {/* RIGHT SIDE: Tab Image & Decoration */}
          <div className="md:w-2/3 flex justify-center">
            <div className="relative">
              <img
                src={activeTab === 0 ? Dept : activeTab === 1 ? Equity : activeTab === 2 ? Msa : Rating}
                alt={`${current.title} illustration`}
                className="max-w-full h-56 sm:h-60 md:h-64 lg:h-72 rounded-2xl object-cover"
              />
              {activeTab === 0 && (
                <>
                  <svg className="absolute -top-4 -left-4 w-12 h-12" fill="none" viewBox="0 0 48 48">
                    <path d="M8,24 Q20,-2 48,12" stroke="#ffa726" strokeWidth="3" fill="none" />
                  </svg>
                  <svg className="absolute -bottom-5 -right-5 w-14 h-14" fill="none" viewBox="0 0 56 56">
                    <path d="M8,40 Q28,56 56,24" stroke="#2394f7" strokeWidth="3" fill="none" />
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
