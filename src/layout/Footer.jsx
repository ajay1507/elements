import React from 'react';
import footerlogo from "../assets/footer/footerlogo.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#373737] py-10">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] 2xl:px-[240px]">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-start gap-12">
          {/* Company Info */}
          <div className="md:w-[29%]">
            <img src={footerlogo} alt="EFS Logo" className="h-[38px] mb-3" />
            <div className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Elements Finance Solution Private Limited
              </span>
              <br />
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
          {/* Contact Us - right aligned on desktop */}
          <div className="md:w-[31%] mt-10 md:mt-0 flex flex-col md:items-end items-start pr-0 md:pr-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact US</h3>
            <div className="mb-2 text-base text-gray-300">
              Email: <a href="mailto:info@elementsfs.com" className="text-white hover:underline">info@elementsfs.com</a>
            </div>
            <div className="mb-2 text-base text-gray-300">
              Contact No.: <span className="text-white">+91 9920 820 795</span>
            </div>
            {/* <div className="mt-3 mb-4 text-base text-right w-full md:w-auto"> */}
              <span className="font-semibold text-white block">Elements Financial Solution</span>
              <span className="block text-gray-300">
                5th Floor, A – Wing, Trade Link,<br />
                Kamala Mills Compound,<br />
                Lower Parel, Mumbai – 400013,<br />
                Maharashtra, INDIA.
              </span>
            {/* </div> */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#545454] rounded-md p-1.5 transition-colors hover:bg-[#0077B5] mt-2"
              style={{ width: 34, height: 34 }}
              aria-label="LinkedIn"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                width={24}
                height={24}
                style={{ display: "block", margin: "auto" }}
              />
            </a>
          </div>
        </div>
      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-base text-gray-400">
  <div>© 2025 Elements Financial Solutions. All rights reserved.</div>
         <div className="flex gap-5 mt-3 md:mt-0 text-base">
  <a href="#" className="hover:text-white">Privacy Policy</a>
  <span>|</span>
  <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
