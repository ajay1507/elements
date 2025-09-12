import React, { useState,useEffect } from "react";
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
import AjinkyaShewale from "../assets/About/AjinkyaShewale.png"; 

const additionalTeamMembers = [
  { name: "Reshma Shetty", role: "Sr. Manager, Business Development", img: ReshmaShetty },
  { name: "Keval Kareliya", role: "Sr. Analyst, Investment Banking", img: "https://example.com/images/keval-kareliya.jpg" },
  { name: "Nirmal Bora", role: "Sr. Manager, Investment Banking", img: NirmalBora },
  { name: "Aditi Arya", role: "Management Trainee, Investment Banking", img: "https://example.com/images/aditi-arya.jpg" },
  { name: "Komal Agarwal", role: "Manager, Investment Banking", img: KomalAgarwal },
  { name: "Ajinkya Shewale", role: "Analyst", img: AjinkyaShewale },
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
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    // Reset progress when new member shows
    setProgress(0);

    // Animate progress bar every 40ms (100 steps = 4s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSelectedIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
          return 0;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [selectedIndex, isPaused]);

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
<section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
  <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-16">
    
    {/* Right side – details */}
    <div className="w-full lg:w-3/5">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Chivo mb-6 sm:mb-8 md:mb-12 text-left">
        Meet the <span className="text-black">Team</span>
      </h2>

      {/* Member name + role */}
      <div className="flex flex-col">
        <h3 className="text-blue-600 text-lg sm:text-2xl md:text-3xl font-Chivo mb-1 truncate">
          {member.name.toUpperCase()}
        </h3>
        <p className="text-sm sm:text-base md:text-lg font-Chivo text-black">
          {member.role}
        </p>
        <p
          className={`text-gray-500 font-medium text-xs sm:text-sm md:text-base ${
            member.credential ? "" : "invisible"
          }`}
        >
          {member.credential || "Placeholder"}
        </p>
      </div>

      {/* Bio */}
      <div
        className="mt-4 text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base md:text-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        tabIndex={0}
      >
        {Array.isArray(member.bio)
          ? member.bio.map((para, idx) => (
              <p key={idx} className="mb-3">
                {para}
              </p>
            ))
          : member.bio}
      </div>

      {/* LinkedIn */}
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

      {/* Progress Bar */}
      <div className="w-full mt-6 h-[2px] bg-gray-200 relative overflow-hidden rounded">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex w-full mt-8 md:mt-10">
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-start">
          {teamMembers.map((m, idx) => (
            <button
              key={m.name}
              onClick={() => handleMemberChange(idx)}
              className={`flex flex-col items-center text-center transition ${
                selectedIndex === idx
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{ minWidth: "4.5rem" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-blue-400 overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base font-Chivo truncate w-full text-center">
                {m.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Left side – capsule image */}
    <div
      className="overflow-hidden shadow-lg flex-shrink-0 mt-6 lg:mt-12 flex flex-col items-center justify-start
      w-[160px] h-[260px] sm:w-[200px] sm:h-[320px] md:w-[260px] md:h-[400px] lg:w-[300px] lg:h-[480px]"
      style={{
        borderRadius: "300px",
        background: "#00B3FF",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
    >
      <img
        src={member.img}
        alt={member.name}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{
          borderRadius: "300px",
          marginTop: "18px",
          height: "calc(100% - 18px)",
          width: "100%",
        }}
      />
    </div>
  </div>
</section>


  );
}


export default function About() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-9 sm:px-8 md:px-16 lg:px-32 xl:px-[120px] 2xl:px-[240px]"
        style={{ backgroundImage: `url(${BGAbout})`, marginBottom: 0, paddingBottom: 0 }}
      >
        <div className="absolute inset-0 bg-black/60 " />
        <div className="relative z-10 flex flex-col items-center space-y-10 w-full text-center">
          <h1 className="text-white text-5xl md:text-7xl font-Chivo leading-tight max-w-5xl mx-auto mb-8">
            Empowering <br /> Growth with Purpose
          </h1>

          <div
   className="text-white border border-white/10 shadow-2xl backdrop-blur-lg bg-black/30 w-full max-w-[1200px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] rounded-[30px] p-4 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8 justify-center items-start"
style={{
  opacity: 1,
  boxSizing: "border-box",
}}

          >
            <h2 className="text-3xl md:text-4xl font-Chivo mb-2 text-white">
              Elements Financial Solutions
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-white/90" style={{ marginTop: 0 }}>
              Since its inception in 2013, Elements Financial Solutions Private Limited (EFS) has established itself as a global financial and business advisory firm dedicated to delivering more than just financial analysis. EFS crafts value-driven strategies that fuel business growth while prioritizing positive societal impact. Our mission is to guide companies on their growth journey through customized financial advisory services that seamlessly integrate economic and social considerations.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              With a focus on collaboration and innovation, EFS transforms challenges into opportunities, offering tailored solutions such as strategic planning, financial restructuring, and economic analysis. Backed by a team of seasoned professionals, we are committed to fostering sustainable business practices and delivering impactful results for clients in both local and international markets.
            </p>
          </div>
          <button className="mt-8 px-8 sm:px-10 py-3 rounded-full bg-black/1 backdrop-blur-lg text-white hover:bg-black/10 border border-white/10 transition flex items-center gap-2 shadow-lg text-lg font-medium max-w-max mx-auto">
            Explore More About Us <ChevronDown size={22} />
          </button>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-[#00467B] py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[120px] 2xl:px-[240px]" style={{ marginTop: 0, paddingTop: 150 }}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center text-white gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-Chivo mb-6 text-center md:text-left">
              Our Expertise
            </h2>
            <p className="text-base leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left">
              With a proven track record of success, Elements Financial Solutions delivers exceptional
              financial solutions across diverse sectors, including Energy, Materials, Industrials,
              Utilities, Health Care, Financials, Consumer Discretionary, Consumer Staples,
              Information Technology, Communication Services, and Real Estate. Our expertise drives
              consistent value, empowering clients with tailored strategies for sustainable growth and
              resilience in dynamic markets.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[590px] h-auto aspect-square">
              <img src={secimg} alt="Our Expertise" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <TeamCarousel />

      {/* Additional Team Members */}
      <section
        className="flex flex-col items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[120px] 2xl:px-[240px] py-16"
        style={{
          opacity: 1,
          position: "relative"
        }}
      >
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 sm:gap-x-10 md:gap-x-16 w-full">
            {additionalTeamMembers.map(({ name, role, img }) => (
              <div
                key={name}
                className="flex flex-row items-center"
                style={{ minHeight: 150 }}
              >
                <div
                  className="rounded-full shadow-md overflow-hidden flex-shrink-0"
                  style={{
                    width: 90,
                    height: 90,
                    background: "#eee",
                  }}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start pl-4 sm:pl-8">
                  <h3 className="font-Chivo text-lg md:text-xl text-black text-left mb-1">
                    {name}
                  </h3>
                  <div className="text-sm md:text-md text-gray-500 text-left leading-tight mb-1" style={{ whiteSpace: "pre-line" }}>
                    {role}
                  </div>
                  <a href="#" className="mt-1 text-blue-600 hover:text-blue-800">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
