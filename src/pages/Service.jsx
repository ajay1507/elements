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
    description: `At Elements Financial Solutions, our Debt Advisory practice is designed to unlock growth, liquidity, and sustainability for businesses across sectors. Whether you're looking to fund expansion, refinance existing debt, or resolve stressed assets, we offer end-to-end support across the entire credit lifecycle. We engage closely with promoters, CFOs, and institutional stakeholders to structure, syndicate, and execute optimal financing strategies tailored to business needs and market conditions.`,
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
    description: `At Elements Financial Solutions, we empower businesses to unlock value, scale operations, and achieve liquidity through tailored equity advisory solutions. Whether you're looking to raise growth capital, optimize shareholder structure, or prepare for a public offering, our deep expertise ensures a seamless capital journey. We bring together investor insights, sector intelligence, and strategic structuring to deliver capital that aligns with your business goals — and your vision.`,
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
    description: `At Elements Financial Solutions, our M&A Advisory team supports businesses through the entire merger and acquisition lifecycle—from strategic assessment, valuation, negotiation to integration. We help unlock value, mitigate risks, and drive successful transactions aligned with long-term goals.`,
  },
  {
    title: "Credit Rating Advisory",
    points: [
      "Credit Rating Assessment",
      "Rating Agency Coordination",
      "Financial Strategy Consultancy",
      "Risk Management",
      "Improving Creditworthiness",
    ],
    description: `Our Credit Rating Advisory services focus on helping businesses understand, improve, and manage their credit ratings. We provide expert guidance on rating agency processes, financial disclosures, and strategic planning to enhance credit profiles and optimize borrowing costs.`,
  },
];

export default function Service() {
  const [activeTab, setActiveTab] = useState(0);
  const [showOfferings, setShowOfferings] = useState(false);

  const current = services[activeTab];

  const toggleOfferings = () => setShowOfferings((prev) => !prev);

  return (
    <>
      {/* Hero Section */}
      
    <section
    
  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/50 px-4 sm:px-8 md:px-16 lg:px-32 rounded-[30px]"
  style={{
    backgroundImage: `url(${serviceImages[activeTab] || Servicebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  
>
  <div className="absolute inset-0 bg-black/60" />
 <div className="relative z-10 flex flex-col items-center space-y-10 w-full text-center px-4 py-9 sm:px-6 md:px-8 max-w-full sm:max-w-4xl md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1342px] mx-auto">
  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-8 sm:mb-10">
    Empowering <br /> Sustainable Growth
  </h1>

  <div
   className="text-white border border-white/20 shadow-2xl backdrop-blur-lg bg-black/40 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-screen-lg sm:max-w-screen-xl md:max-w-screen-2xl flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10"
style={{ boxSizing: "border-box" }}

  >
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0">
      {current.title}
    </h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
      Offers a comprehensive suite of financial and business advisory services designed to empower clients across diverse sectors, including Energy, Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate. Our tailored solutions, encompassing strategic planning, financial restructuring, and economic analysis, are crafted to transform challenges into opportunities, fostering sustainable growth and resilience. By combining deep industry expertise with a commitment to innovation and collaboration, EFS delivers impactful strategies that maximize value and drive long-term success for businesses in both local and global markets.
    </p>
  </div>

  <div className="p-2 w-full max-w-full sm:max-w-4xl md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1342px] mx-auto text-center mb-10 sm:mb-12">
    <img
      src={servicebg1}
      alt="Decorative Graphic"
      className="inline-block max-w-full h-auto object-contain"
    />
  </div>
</div>

</section>


      {/* Intro Section */}
      <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[120px] 2xl:px-[240px]">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-[1440px] mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Comprehensive Financial Solutions for Sustainable Growth
            </h1>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl">
              At Elements Financial Solutions, we deliver a dynamic suite of advisory services tailored to empower clients across sectors including Energy, Materials, Industrials, Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples, Information Technology, Communication Services, and Real Estate. With commitment to innovation, collaboration, and sustainability, our solutions transform challenges into opportunities, driving resilience and long-term success.
            </p>
            <button className="mt-8 text-gray-600 hover:text-gray-900 text-lg font-light flex items-center gap-2">
              Explore Offering Details <span style={{ fontSize: 24 }}>↓</span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={secimg} alt="Financial Illustration" className="rounded-xl max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Services Tabbed Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[120px] 2xl:px-[240px] py-20 w-full">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl font-extrabold text-black mb-6">Services We Offer</h1>
          <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 mb-12 mx-auto w-full overflow-x-auto">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setShowOfferings(false);
                }}
                className={`flex-1 min-w-[160px] py-2 text-center text-base sm:text-lg font-semibold uppercase transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === index
                    ? "border-[#00B3FF] text-[#00B3FF]"
                    : "border-transparent text-gray-400 hover:text-[#00B3FF] active:bg-gray-200"
                }`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                style={{ flexBasis: "0 0 auto" }}
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
              <p
             
                className="mb-10 text-gray-800"
                style={{
                  fontFamily: "Albert Sans, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "1.7",
                  opacity: 1,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "left",
                  letterSpacing: 0,
                }}
              >
                At Elements Financial Solutions, our Debt Advisory practice is designed to unlock growth, liquidity, and sustainability for businesses across sectors. Whether you're looking to fund expansion, refinance existing debt, or resolve stressed assets, we offer end-to-end support across the entire credit lifecycle.
We engage closely with promoters, CFOs, and institutional stakeholders to structure, syndicate, and execute optimal financing strategies tailored to business needs and market conditions.
              </p>
              <button
                onClick={toggleOfferings}
                className="flex items-center gap-2 border border-gray-400 rounded-full px-6 py-2 text-sm sm:text-base hover:border-gray-900 hover:text-black transition"
                aria-label={`View offerings for ${current.title}`}
              >
                {showOfferings ? "Close Offerings" : "View Our Offerings"}{" "}
                <span className="text-xl">{showOfferings ? "↑" : "↓"}</span>
              </button>
            </div>

            {/* RIGHT SIDE: Tab Image & Decoration */}
            <div className="md:w-2/3 flex justify-center">
              <div className="relative">
                <img
                  src={
                    activeTab === 0
                      ? Dept
                      : activeTab === 1
                      ? Equity
                      : activeTab === 2
                      ? Msa
                      : Rating
                  }
                  alt={`${current.title} illustration`}
                  className="max-w-full h-56 sm:h-60 md:h-64 lg:h-72 rounded-2xl object-cover"
                />
                {activeTab === 0 && (
                  <>
                    <svg className="absolute -top-4 -left-4 w-12 h-12" fill="none" viewBox="0 0 48 48">
                      <path d="M8,24 Q20,-2 48,12"  strokeWidth="3" fill="none" />
                    </svg>
                    <svg className="absolute -bottom-5 -right-5 w-14 h-14" fill="none" viewBox="0 0 56 56">
                      <path d="M8,40 Q28,56 56,24"  strokeWidth="3" fill="none" />
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>
          {showOfferings && (
           <div className="mt-12 flex flex-col items-stretch w-full min-h-screen">
  <ul className="w-full bg-white p-8 space-y-8 max-w-full mx-auto">
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
                className="mt-8 border border-gray-400 text-lg font-normal text-gray-800 bg-white hover:text-black hover:border-black transition mx-auto"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}