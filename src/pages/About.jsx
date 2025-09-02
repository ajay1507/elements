import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import BGAbout from "../assets/About/BGAbout.jpg";
import secimg from "../assets/About/secimg.png";
import Dheeraj from "../assets/About/Dheeraj.png";
import DineshKundar from "../assets/About/DineshKundar.png";
import SandeepAgarwa from "../assets/About/SandeepAgarwa.png";
import SiddeshRai from "../assets/About/SiddeshRai.png";
import NirmalBora from "../assets/About/NirmalBora.png";
import ReshmaShetty from "../assets/About/ReshmaShetty.png";
import KomalAgarwal from "../assets/About/KomalAgarwal.png";

const additionalTeamMembers = [
  { name: "Reshma Shetty", role: "Sr. Manager, Business Development", img: ReshmaShetty },
  { name: "Keval Kareliya", role: "Sr. Analyst, Investment Banking", img: "https://example.com/images/keval-kareliya.jpg" },
  { name: "Nirmal Bora", role: "Sr. Manager, Investment Banking", img: NirmalBora },
  { name: "Aditi Arya", role: "Management Trainee, Investment Banking", img: "https://example.com/images/aditi-arya.jpg" },
  { name: "Komal Agarwal", role: "Manager, Investment Banking", img: KomalAgarwal },
  { name: "Ajinkya Shewale", role: "Analyst", img: "https://example.com/images/ajinkya-shewale.jpg" },
  { name: "Sudhanshu Gupta", role: "Management Trainee, Investment Banking", img: "https://example.com/images/sudhanshu-gupta.jpg" },
  { name: "Prashanth Chaitnya", role: "Management Trainee", img: "https://example.com/images/prashanth-chaitnya.jpg" },
];

const teamMembers = [
  {
    name: "Dheeraj Jhawar",
    role: "Director",
    credential: "CA, CFA",
    bio: `Dheeraj Jhawar has excelled for over 20 years as a Chartered Accountant, achieving top ranks (1st and 2nd) in both the CA Inter and CA Final exams in India, and is also a certified CFA charter-holder from the USA.

He founded Elements Financial, a specialized financial and business advisory firm that excels in large-scale fundraising efforts, successfully securing over US$10 billion in funds for diverse sectors such as infrastructure, agriculture, education, mining, real estate, venture capital, and non-banking financial corporations (NBFCs).

Dheeraj maintains active and strategic relationships with key Indian and offshore banks, alternative investment funds, pension funds, and development financial institutions, positioning him as a distinguished figure in the financial advisory landscape.`,
    img: Dheeraj,
    linkedin: "#",
  },
  {
    name: "Sandeep Agarwal",
    role: "Director",
    credential: "CA, CFA",
    bio: `Sandeep Agarwal brings over 20 years of comprehensive experience as both a Chartered Accountant and a Chartered Financial Analyst.

Specializing in the infrastructure sector, he has demonstrated expertise in key business functions including project financing, strategic planning, business development, contract management, financial modeling, economic analysis of projects, budgeting, and cost control, primarily within the energy industry.

His strong professional network includes active relationships with major Indian banks and financial institutions, high-net-worth individuals, alternative investment funds, and pension funds. Sandeep's diverse skill set and extensive contacts make him a valuable leader in corporate finance and management.`,
    img: SandeepAgarwa,
    linkedin: "#",
  },
  {
    name: "Dinesh Kunder",
    role: "Executive Director",
    credential: "CA",
    img: DineshKundar,
    linkedin: "https://linkedin.com/in/dinesh-kunder",
    bio: [
      "Dinesh Kunder brings to the table an impressive tenure of 29 years in the realms of Corporate Finance, Structured Finance, and Corporate Advisory, with a strong record of delivering mandates across various industries and the investment banking sector.",
      "His expertise is primarily anchored in areas like debt syndication, financial restructuring, and the re-capitalization of distressed assets, where he has successfully executed numerous transactions. His extensive experience is further bolstered by solid professional relationships within the banking and finance industry.",
      "Holding a degree in commerce and credentials as a chartered accountant, Dinesh's academic and professional qualifications lay a robust foundation for his distinguished career in finance and advisory services.",
    ],
  },
  {
    name: "Siddesh Rai",
    role: "Business Development Head",
    credential: "MBA in Marketing",
    img: SiddeshRai,
    linkedin: "#",
    bio: [
      "With over 16 years of professional experience, Siddesh Rai is a seasoned expert in sales and marketing, specializing in the ratings sector for the past 12 years. An MBA graduate from Welingkars, Siddesh has played pivotal roles in business development, driving growth and strategic initiatives.",
      "His distinguished career includes significant tenures at Care Ratings, Motilal Oswal, and MCX Stock Exchange, where he honed his skills and contributed to their expansive market presence.",
      "Siddesh’s deep industry knowledge and strategic insight make him a key asset in navigating complex market dynamics and enhancing business value."
    ]
  }
];

function TeamCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleMemberChange = (index) => {
    if (index !== selectedIndex) {
      setFade(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setFade(false);
      }, 300);
    }
  };

  const member = teamMembers[selectedIndex];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Right side – details */}
        <div className="w-full md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-left">
            Meet the <span className="font-bold text-black">Team</span>
          </h2>

          <h3 className="text-blue-600 text-2xl md:text-3xl font-extrabold mb-1">
            {member.name.toUpperCase()}
          </h3>
          <p className="text-lg font-semibold text-black">{member.role}</p>
          {member.credential && (
            <p className="text-gray-500 font-medium">{member.credential}</p>
          )}
          <div className="mt-4 text-gray-700 whitespace-pre-line">
            {Array.isArray(member.bio)
              ? member.bio.map((para, idx) => (
                  <p key={idx} className="mb-3">
                    {para}
                  </p>
                ))
              : member.bio}
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
        {/* Left side – photo (capsule shape) */}
        <div className="w-60 h-96 bg-blue-500 overflow-hidden shadow-lg flex-shrink-0 mt-2 md:mt-10 rounded-[9999px]">
          <img
            src={member.img}
            alt={member.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      {/* Circle thumbnails navigation */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        {teamMembers.map((m, idx) => (
          <button
            key={m.name}
            onClick={() => handleMemberChange(idx)}
            className={`flex flex-col items-center text-center transition ${
              selectedIndex === idx
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-xs font-medium">{m.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white px-6"
        style={{ backgroundImage: `url(${BGAbout})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center space-y-10 max-w-5xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto">
            Empowering <br /> Growth with Purpose
          </h1>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-8 text-left text-sm md:text-base max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Elements Financial Solutions
            </h2>
            <p className="mb-4 text-gray-200 leading-relaxed">
              Since its inception in 2013, Elements Financial Solutions Private Limited (EFS) has
              established itself as a global financial and business advisory firm dedicated to
              delivering more than just financial analysis. EFS crafts value-driven strategies that
              fuel business growth while prioritizing positive societal impact. Our mission is to
              guide companies on their growth journey through customized financial advisory services
              that seamlessly integrate economic and social considerations.
            </p>
            <p className="text-gray-200 leading-relaxed">
              With a focus on collaboration and innovation, EFS transforms challenges into
              opportunities, offering tailored solutions such as strategic planning, financial
              restructuring, and economic analysis. Backed by a team of seasoned professionals, we
              are committed to fostering sustainable business practices and delivering impactful
              results for clients in both local and international markets.
            </p>
          </div>
          <button className="mt-4 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/30 transition flex items-center gap-2 shadow-md max-w-max mx-auto">
            Explore More About Us <ChevronDown size={18} />
          </button>
        </div>
      </section>
      {/* Expertise Section */}
      <section className="bg-[#00467B] text-white py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6">Our Expertise</h2>
            <p className="text-base leading-relaxed">
              With a proven track record of success, Elements Financial Solutions delivers exceptional
              financial solutions across diverse sectors, including Energy, Materials, Industrials,
              Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples,
              Information Technology, Communication Services, and Real Estate. Our expertise drives
              consistent value, empowering clients with tailored strategies for sustainable growth and
              resilience in dynamic markets.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[590px] h-[590px]">
              <img src={secimg} alt="Our Expertise" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Meet the Team */}
      <TeamCarousel />
      {/* Additional Team Members */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {additionalTeamMembers.map(({ name, role, img }) => (
            <div key={name} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full shadow-md overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{role}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
