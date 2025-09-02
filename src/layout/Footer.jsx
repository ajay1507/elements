import React from 'react';
import footerlogo from "../assets/footer/footerlogo.svg"
// import Logo from 'path/to/logo.png' // Uncomment and provide your real logo path

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#373737] py-10">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-start gap-12">
        {/* Company Info */}
        <div className="md:w-[29%]">
          {<img src={footerlogo} alt="EFS Logo" className="h-[38px] mb-3" ></img>}
          <div className="mb-3">
            <span className="inline-block text-2xl font-signature leading-tight align-bottom mr-2"> {/* for logo */} 
              {/* <img src={Logo} alt="Elements Financial Solutions" className="h-9 inline-block align-bottom" /> */}
              {/* <span className="font-[cursive] italic text-lg align-baseline" style={{letterSpacing: "2px"}}>Elements
                <span className="text-[10px] not-italic font-sans text-white"> Financial Solutions</span>
              </span> */}
            </span>
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Elements Finance Solution Private Limited</span><br />
            Since its inception in 2013, Elements Financial Solutions Private Limited (EFS) has established itself as a global financial and business advisory firm dedicated to delivering more than just financial analysis. EFS crafts value–driven strategies that fuel business growth while prioritizing positive societal impact. Our mission is to guide companies on their growth journey through customized financial advisory services that seamlessly integrate economic and social considerations.
          </div>
        </div>

        {/* Direct Links */}
        <div className="md:w-[18%] mt-10 md:mt-0">
          <h3 className="text-lg font-semibold mb-6 text-white">Direct Links</h3>
          <ul className="space-y-3 text-gray-300 text-base">
            <li><a href="/" className="hover:text-white duration-150">Home</a></li>
            <li><a href="/about" className="hover:text-white duration-150">About</a></li>
            <li><a href="/service" className="hover:text-white duration-150">Service</a></li>
            <li><a href="/transactions" className="hover:text-white duration-150">Transaction</a></li>
            <li><a href="/contact" className="hover:text-white duration-150">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
       <div className="md:w-[22%] mt-10 md:mt-0">
  <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
  <ul className="space-y-3 text-gray-300 text-base">
    <li><a href="/service#debt-advisory" className="hover:text-white duration-150">Debt Advisory</a></li>
    <li><a href="/service#equity-advisory" className="hover:text-white duration-150">Equity Advisory</a></li>
    <li><a href="/service#ma-advisory" className="hover:text-white duration-150">M &amp; A Advisory</a></li>
    <li><a href="/service#credit-rating-advisory" className="hover:text-white duration-150">Credit Rating Advisory</a></li>
    <li><a href="/contact#contact" className="hover:text-white duration-150">Contact</a></li>
  </ul>
</div>



        {/* Contact Us */}
        <div className="md:w-[31%] mt-10 md:mt-0 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-6 text-white">Contact US</h3>
          <div className="mb-2 text-base text-gray-300">
            Email: <a href="mailto:info@elementsfs.com" className="text-white hover:underline">info@elementsfs.com</a>
          </div>
          <div className="mb-2 text-base text-gray-300">
            Contact No.: <span className="text-white">+91 9920 820 795</span>
          </div>
          <div className="mt-3 mb-4 text-base">
            <span className="font-semibold text-white block">Elements Financial Solution</span>
            <span className="block text-gray-300">
              5th Floor, A – Wing, Trade Link,<br />
              Kamala Mills Compound,<br />
              Lower Parel, Mumbai – 400013,<br />
              Maharashtra, INDIA.
            </span>
          </div>
          {/* Linkedin Icon (Replace SVG with your icon if needed) */}
          <a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#545454] rounded-md p-1.5 transition-colors hover:bg-[#0077B5]"
  style={{ width: 34, height: 34 }}
  aria-label="LinkedIn"
>
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className="text-gray-200"
    width={24}
    height={24}
    style={{ display: "block", margin: "auto" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="7" fill="none" />
    <path d="M12.995 13.333h2.495v2.243h.035c.347-.586 1.198-1.206 2.464-1.206 2.634 0 3.121 1.733 3.121 3.994v4.307h-2.495v-3.816c0-.911-.017-2.086-1.272-2.086-1.274 0-1.468.995-1.468 2.023v3.879h-2.48v-7.338zM10.82 12.067a1.415 1.415 0 110-2.829 1.415 1.415 0 010 2.829zm1.247 1.266h-2.491v7.338h2.491v-7.338zm10.933 13.329h-17.8c-.299 0-.54-.241-.54-.54v-17.753c0-.299.241-.54.54-.54h17.8c.299 0 .54.241.54.54v17.753c0 .299-.241.54-.54.54z"/>
  </svg>
</a>

        </div>
      </div>
      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-4 md:px-8 max-w-[1500px] mx-auto">
        <div>© 2025 Elements Financial Solutions. All rights reserved.</div>
        <div className="flex gap-5 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
