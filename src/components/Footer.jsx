import {
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import roboat from "../assets/roboat.png";
import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import teleicon from "../assets/teleicon.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="Career" className="relative mt-6 remove-mg md:mt-[150px] ">
      <div className="flex flex-col p-10 sm:p-0 justify-center items-center">
        <div className="p-7 increse-w robot-box-1 w-[105%] sm:w-[500px] md:w-auto lg:w-[80%] sm:p-10 lg:absolute flex sm:gap-2 md:gap-5 flex-col md:flex-row item-space lg:gap-9 items-center rounded-lg shadow-md drop-shadow-2xl bg-gray-200  justify-around lg:mt-4 h-auto md:h-[180px] ">
          <img
            src={roboat}
            alt="footerimg"
            className="text-center-1 robot-box-1 rounded-full md:h-auto animate-bounce10px"
          />
          <div className="text-center text-center-1 md:text-left flex flex-col  gap-4 font-bold">
            <h1 className=" ITC_Avant_Garde_Gothic_Std_Medium leading-10 lg:leading-3 lg:text-4xl text-[#632185] text-3xl">
              Need a{" "}
              <span className="bg-gradient-to-b from-[#FF0079] to-[#632084] bg-clip-text text-transparent">
                Hand?
              </span>
            </h1>

            <p className="text-lg ITC_Avant_Garde_Gothic_Std_Medium md:text-xl text-[#632185]">
              Don't Worry, We are here to assist you!
            </p>
          </div>

          <div className="text-center mt-7 sm:mt-0 ITC_Avant_Garde_Gothic_Std_Light font-semibold   ">
            <h1 className="text-lg  sm:text-xl text-[#632185] mb-4 text-[2.5rem] font-bold">
              Get support at
            </h1>
            <a
              href="https://t.me/icphub_IN"
              target="_blank"
              className="flex justify-center items-center"
            >
              <div className="rounded-full bg-gradient-to-r from-[#00A3DF] to-[#FF0079] px-4 py-2 text-white flex flex-row gap-4 sm:gap-4  border-2 border-white items-center shadow-custom-bottom w-64 sm:w-72 text-center justify-center">
                <img src={teleicon} alt="" />
                <button className="text-sm tracking-widest sm:text-lg">
                  ICPhub_IN
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* /-----------------------------Footer actual---------------------------------? */}
      <footer className="bg-gradient-to-r from-[#662D91] to-[#3588EA] mt-2 md:mt-[30px] pt-12">
        {!isMobile ? (
          <div className="container mx-auto sm:px-4 sm:mt-20 mt-10">
            <div className="lg:pt-6 pt-26 md:ml-[120px] ml-0 flex flex-col items-center  sm:flex-row md:items-start   space-y-8 md:space-y-0">
              {/* md:justify-between */}
              <div className="flex flex-col items-start sm:pt-0 pt-[20px] sm:mr-[100px]  md:mr-[100px] sm:ml-0 ml-4 md:items-start ">
                <div className="flex items-center justify-center mt-[-30px] md:justify-start">
                  <img
                    src={logo}
                    alt="Crewsphere Logo"
                    className="sm:h-14   h-9  sm:mr-2 pt-2 "
                  />
                </div>
                <p className="mt-12 ITC_Avant_Garde_Gothic_Std_Medium text-center md:text-left font-medium text-[20px] text-white">
                  Follow Us
                </p>
                <div className="flex sm:flex-row spacing sm:gap-0 sm:flex-nowrap  space-x-5 sm:space-x-8 mt-2  md:justify-start  text-white flex-wrap">
                  <a
                    href="https://twitter.com/icphub_IN"
                    target="_blank"
                    className="sm:text-[1.5rem] text-[16px]  md:text-[2rem]"
                  >
                    <FaXTwitter className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/icphub_in/"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaInstagram className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/92786486"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaLinkedin className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://t.me/icphub_IN"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaTelegram className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://discord.gg/VNYZbvBPrF"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaDiscord className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/JFXwqbbsshE1BfFBJ158qq"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaWhatsapp className="sm:w-auto w-5 sm:ml-0 sm:mr-0 ml-[-4px] mr-4" />
                  </a>
                </div>
              </div>

              {/* Social media links ends here👆🏼 */}
              {/* -------------------footer links  */}

              <div className="flex mt-4 sm:mt-4 flex-row sm:flex-col items-center md:items-center md:text-center font-medium w-full md:w-auto mx-auto text-white text-start">
                <ul className="space-y-2 spacing2 sm:gap-0 flex-wrap flex flex-row sm:flex-col text-start sm:text-[18px] text-[12px]ITC_Avant_Garde_Gothic_Std_Light  mt-[-30px] sm:ml-0 ml-4">
                  <li className="mt-2">
                    <a
                      href="#about"
                      className="text-custom-nav hover:text-gray-200"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="https://build.crewsphere.io/"
                      className="text-custom-nav hover:text-gray-200"
                    >
                      Incubator
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="https://lu.ma/icphub_IN"
                      target="_blank"
                      className="text-custom-nav hover:text-gray-200"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/PhzpdZVWv1gyUXVr5"
                      target="_blank"
                      className="text-custom-nav hover:text-gray-200"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto sm:px-4 sm:mt-20 mt-10">
            <div className="lg:pt-6 pt-26 md:ml-[120px] ml-0 flex flex-col items-center  sm:flex-row md:items-start   space-y-8 md:space-y-0">
              {/* md:justify-between */}
              <div className="flex items-center justify-center mt-[-30px] md:justify-start">
                <img
                  src={logo}
                  alt="Crewsphere Logo"
                  className="sm:h-14   h-9  sm:mr-2 pt-2 "
                />
              </div>

              {/* -------------------footer links  */}
              <div className="w-[80%] m-auto">
                <ul className="flex-wrap flex justify-center items-center gap-5 flex-row text-center text-white text-[12px]ITC_Avant_Garde_Gothic_Std_Light">
                  <a
                    href="#about"
                    className="text-custom-nav hover:text-gray-200"
                  >
                    About
                  </a>
                  <a
                    href="https://build.crewsphere.io/"
                    className="text-custom-nav hover:text-gray-200"
                  >
                    Incubator
                  </a>
                  <a
                    href="https://lu.ma/icphub_IN"
                    target="_blank"
                    className="text-custom-nav hover:text-gray-200"
                  >
                    Events
                  </a>
                  <a
                    href="https://forms.gle/PhzpdZVWv1gyUXVr5"
                    target="_blank"
                    className="text-custom-nav hover:text-gray-200"
                  >
                    Career
                  </a>
                </ul>
              </div>

              {/* ------------ logos ------------ */}
              <div className="flex flex-col gap-2 ">
                <p className="ITC_Avant_Garde_Gothic_Std_Medium text-center md:text-left font-medium text-[20px] text-white">
                  Follow Us
                </p>
                <div className="flex spacing sm:gap-0 sm:flex-nowrap  space-x-5 sm:space-x-8 mt-2  md:justify-start  text-white flex-wrap">
                  <a
                    href="https://twitter.com/icphub_IN"
                    target="_blank"
                    className="sm:text-[1.5rem] text-[16px]  md:text-[2rem]"
                  >
                    <FaXTwitter className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/icphub_in/"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaInstagram className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/92786486"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaLinkedin className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://t.me/icphub_IN"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaTelegram className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://discord.gg/VNYZbvBPrF"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaDiscord className="sm:w-auto w-5 sm:mx-0 mx-[-4px]" />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/JFXwqbbsshE1BfFBJ158qq"
                    target="_blank"
                    className="text-custom-nav text-[1.5rem] md:text-[2rem]"
                  >
                    <FaWhatsapp className="sm:w-auto w-5 sm:ml-0 sm:mr-0 ml-[-4px] mr-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --------------footer last text */}
        <div className="text-center text-[12px] sm:text-sm mt-10 bg-[#4845D2] py-2 text-white">
          <p>© 2024 Crewsphere All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
