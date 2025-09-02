import React from "react";
import Contact from "../assets/Contact/Contact.jpg";

export default function ContactPage() {
  return (
    <>
      {/* Hero/Intro Section with background image */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Contact})` }}
        aria-label="Contact Page Hero Section"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 py-20 min-h-[400px]">
          {/* Big Centered Heading */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg mb-16"
            style={{ lineHeight: 1.05, letterSpacing: "-2px" }}
          >
            Get in Touch with<br />
            Elements Financial Solutions
          </h1>

          {/* Frosted glass info card */}
          <div
            style={{
              width: 1400,
              maxWidth: "90vw",
              height: 236,
              borderRadius: 30,
              border: "1px solid rgba(255,255,255,0.18)",
              padding: 40,
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(60px)",
              boxSizing: "border-box",
              marginBottom: 32,
            }}
            className="flex flex-col items-start mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At Elements Financial Solutions</h2>
            <p className="text-gray-100 text-lg md:text-xl font-normal leading-relaxed">
              We’re passionate about innovation, collaboration, and creating lasting value. Join our dynamic team to work on transformative financial solutions for leading corporations across diverse industries.<br />
              We seek talented individuals with expertise in finance, strategy, and advisory services who share our commitment to excellence and sustainability. Explore career opportunities
              and become part of our mission to empower businesses globally.
            </p>
          </div>

          {/* Contact Us Button */}
          <button
            className="mt-1 px-10 py-3 rounded-full border border-white/30 bg-white/10 text-white text-lg font-medium backdrop-blur transition hover:bg-white/20 shadow"
            style={{ borderRadius: 20 }}
            onClick={() => {
              document.getElementById("contact-info")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us <span className="text-xl leading-none align-middle ml-1">&#8595;</span>
          </button>

          {/* Contact info below */}
         
        </div>
      </section>

      {/* Ask Query Section */}
      <section className="w-full bg-white px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Head Office Info */}
          <div>
            <h2 className="text-5xl font-extrabold mb-10">Head Office</h2>
            <div>
              <p className="font-bold mb-2">Elements Financial Solution</p>
              <p className="text-gray-700 mb-6">
                5th Floor, A – Wing, Trade Link, Kamala Mills Compound, Lower Parel, Mumbai – 400013,<br />
                Maharashtra, INDIA.
              </p>
              <div className="mb-4">
                <p className="font-semibold mb-1">Email</p>
                <p className="text-gray-700">siddesh@elementsfs.com</p>
                <p className="text-gray-700">info@elementsfs.com</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Contact</p>
                <p className="text-gray-700">+91 9920 820 795</p>
              </div>
            </div>
          </div>

          {/* Ask Query Form */}
          <form className="w-full" autoComplete="off" aria-label="Ask Query Form">
            <h2 className="text-5xl font-extrabold mb-10">Ask Query</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full border-b-2 border-blue-300 focus:border-blue-500 outline-none py-2 text-lg transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contactNumber" className="sr-only">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  placeholder="Enter Your Contact Number"
                  className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-lg transition"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-lg transition"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-lg transition"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message.."
                rows={4}
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-lg transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="block mx-auto bg-gray-100 text-gray-700 font-medium text-lg px-10 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="w-full bg-white pt-10 pb-0 m-0">
        <h2 className="text-xl font-medium text-center mb-5">Location Map</h2>
        <div className="w-full m-0 p-0">
          <iframe
            title="Elements Financial Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.767168995769!2d72.82608721480518!3d19.0026878871366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceed2879bcd3%3A0x519449d10ba027f0!2sKamala%20Mills%20Compound!5e0!3m2!1sen!2sin!4v1693327917751!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "0", margin: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[350px] md:h-[400px] m-0 p-0 block"
          ></iframe>
        </div>
      </section>
    </>
  );
}
