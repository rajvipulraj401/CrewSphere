import React, { useState, useEffect } from "react";
import bgM from "../assets/bg-mobile.png";
import color from "../assets/color.png";
import color2 from "../assets/color2.png";
import logo from "../assets/logo.png";
import earth from "../assets/earth.png";
import logo2 from "../assets/logo2.png";
import ani from "../assets/ringanim.gif";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isMobile ? (
        <div className="relative w-full md:mb-0  mb-10  sm:mb-7">
          <div className="relative">
            <div
              className="w-[100%] mx-auto h-[750px] 
              "
              style={{
                backgroundColor: "#05071D",
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            >
              <img
                className="absolute left-0 top-0 h-full w-[60%]"
                src={color}
                alt="abc"
              />

              <img
                className="absolute right-0 top-0 h-full w-[100%]"
                src={color2}
                alt="abc"
              />
              <div>
                <img
                  className="absolute  left-1/2 z-30 transform -translate-x-1/2 h-24 w-24 -bottom-9 ml-[3px]"
                  src={logo2}
                  alt="icp"
                />
                <img
                  className="absolute z-20 bg-[#05071D] rounded-full left-1/2 transform -translate-x-1/2 -bottom-16 h-40 w-40  "
                  src={ani}
                  alt="icp"
                />
                <div
                  className="absolute z-10 bg-[#05071D] rounded-full left-1/2 transform -translate-x-1/2 -bottom-[70px] h-44 w-44  "
                  src={ani}
                  alt="icp"
                ></div>
              </div>
            </div>

            <div className={`absolute top-0 flex flex-row w-[100%]`}>
              <nav className="w-full">
                <div
                  className={` px-16 lg:px-0 ${
                    !hasScrolled && "px-18 lg:left-[8%] py-8"
                  } w-full z-40 fixed flex items-center justify-between ${
                    hasScrolled && "p-4 lg:pl-[8%]"
                  } m-auto ${hasScrolled ? "bg-gradient" : ""}`}
                >
                  {isMenuOpen && !isMobile ? (
                    <div className="md:hidden text-white ml-2">
                      <button className="navbar-close" onClick={toggleMenu}>
                        <svg
                          className="h-10 w-10 cursor-pointer hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <a
                      href="/"
                      className="flex items-center  space-x-1 rtl:space-x-reverse"
                    >
                      <img
                        src={logo}
                        className=" sm:h-10 sm:w-72 w-52 h-6"
                        alt="Logo"
                      />
                    </a>
                  )}

                  {isMenuOpen ? (
                    <div className="md:hidden">
                      <button className="navbar-close" onClick={toggleMenu}>
                        <svg
                          className="h-6 w-6 cursor-pointer hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="navbar-burger md:hidden flex items-end justify-end w-full p-2 text-white"
                      onClick={toggleMenu}
                    >
                      <svg
                        className="block h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                    </button>
                  )}

                  <div
                    className={`items-center  relative left-2 justify-center w-full md:order-1 md:block hidden`}
                    id="navbar-sticky"
                  >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-[18px] md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white remove-ml ml-44">
                      <li>
                        <a
                          href="#about"
                          className="block py-2 px-3 rounded hover:text-[#D65CCE]"
                          aria-current="page"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://build.crewsphere.io/"
                          className="block py-2 px-3 rounded hover:text-[#D65CCE]"
                        >
                          Incubator
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://lu.ma/icphub_IN"
                          target="_blank"
                          className="block py-2 px-3 rounded hover:text-[#D65CCE]"
                        >
                          Events
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://forms.gle/PhzpdZVWv1gyUXVr5"
                          target="_blank"
                          className="block py-2 px-3 rounded hover:text-[#D65CCE]"
                        >
                          Career
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div
                    className={`navbar-menu md:hidden fixed inset-0 transition-transform transform ${
                      isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    <div
                      className="navbar-backdrop fixed inset-0 bg-white opacity-25"
                      onClick={toggleMenu}
                    ></div>
                    <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-6/7 max-w-sm py-6 border-r overflow-y-auto bg-[#9F338F]">
                      <div>
                        <a href="/">
                          <div className="flex justify-between items-start p-2 flex-col space-y-4 text-start">
                            <img src={logo} className="h-8" alt="Logo" />
                          </div>
                        </a>
                        <ul className="flex flex-col p-4 mt-4 font-medium text-black">
                          <li>
                            <a
                              href="#about"
                              className="block py-2 px-3 rounded text-white ITC_Avant_Garde_Gothic_Std_Medium"
                              aria-current="page"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://build.crewsphere.io/"
                              className="block py-2 px-3 rounded text-white ITC_Avant_Garde_Gothic_Std_Medium"
                            >
                              Incubator
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://lu.ma/icphub_IN"
                              target="_blank"
                              className="block py-2 px-3 rounded text-white ITC_Avant_Garde_Gothic_Std_Medium"
                            >
                              Events
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://forms.gle/PhzpdZVWv1gyUXVr5"
                              target="_blank"
                              className="block py-2 px-3 rounded text-white ITC_Avant_Garde_Gothic_Std_Medium"
                            >
                              Career
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="flex w-[83%] mt-36 m-auto">
                  <div className="lg:w-[55%] sm:w-[50%] ">
                    <div className="flex justify-start text-white w-[85%]  ">
                      <p className="ITC_Avant_Garde_Gothic_Std_Medium  text-5xl md:text-6xl lg:text-6xl ">
                        <div className="leading-tight">
                          Putting India On The{" "}
                          <span className="text-transparent web-text ITC_Avant_Garde_Gothic_Std_Medium bg-clip-text">
                            Web3
                          </span>{" "}
                          Global Radar
                        </div>
                      </p>
                    </div>
                    <p className="text-white text-[20px] mt-10 ITC_Avant_Garde_Gothic_Std_Light">
                      Explore the Global Applications And Worldwide Adoptions Of
                      ICP
                    </p>
                    <a href="https://t.me/icphub_IN" target="_blank">
                      <button className="px-12 py-3 ITC_Avant_Garde_Gothic_Std_Bold mt-12  rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white border-2 border-white">
                        Join Now
                      </button>
                    </a>
                  </div>

                  <div
                    className="lg:w-[45%] sm:w-[50%] flex justify-end relative
                   bottom-[55px]"
                  >
                    <img className="w-full sm:w-auto" src={earth} alt="Earth" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full md:mb-0 z-50 mb-10  sm:mb-7">
          <div className="relative">
            <img
              className="w-[100%] mx-auto h-[880px]"
              src={bgM}
              alt="background"
              style={{
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
            {/* First color image */}
            <img
              className="absolute left-0 top-0 h-full w-[60%]"
              src={color}
              alt="abc"
            />

            {/* Second color image */}
            <img
              className="absolute right-0 top-0 h-full w-[100%]"
              src={color2}
              alt="abc"
            />

            {/* Logo2 image */}
            <div className=" ">
              <img
                className="absolute  left-1/2 z-10 transform -translate-x-1/2 h-20 w-20 -bottom-6 "
                src={logo2}
                alt="icp"
              />
              <img
                className="absolute  bg-[#05071D] rounded-full left-1/2 transform -translate-x-1/2 -bottom-16 h-40 w-40  "
                src={ani}
                alt="icp"
              />
            </div>
          </div>
          <div className="absolute top-0 p-4 flex flex-row">
            <nav className="w-full">
              <div className="z-40 flex items-center justify-between w-full">
                {isMenuOpen ? (
                  <div className="md:hidden">
                    <button className="navbar-close" onClick={toggleMenu}>
                      <svg
                        className="h-8 w-8 text-white cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <a
                    href="/"
                    className="flex items-center  space-x-1 rtl:space-x-reverse"
                  >
                    <img
                      src={logo}
                      className=" sm:h-10 sm:w-72 w-52 h-6"
                      alt="Logo"
                    />
                  </a>
                )}
                <button
                  className="md:hidden flex items-end justify-end w-full text-white"
                  onClick={toggleMenu}
                >
                  <svg
                    className="block h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
                <div
                  className={`navbar-menu md:hidden fixed inset-0 transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{ zIndex: 4000 }}
                >
                  <div
                    className="navbar-backdrop fixed inset-0 bg-white opacity-25"
                    onClick={toggleMenu}
                  ></div>
                  <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-6/7 max-w-sm py-6 border-r overflow-y-auto bg-[#9F338F]">
                    <div>
                      <a href="/">
                        <div className="flex justify-between items-start p-2 flex-col space-y-4 text-start">
                          <img src={logo} className="h-8" alt="Logo" />
                        </div>
                      </a>
                      <ul className="flex flex-col p-4 mt-4 text-xl text-white ITC_Avant_Garde_Gothic_Std_Medium">
                        <li>
                          <a
                            href="#about"
                            className="block py-2 px-3 rounded"
                            aria-current="page"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://build.crewsphere.io/"
                            className="block py-2 px-3 rounded"
                          >
                            Incubator
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://lu.ma/icphub_IN"
                            target="_blank"
                            className="block py-2 px-3 rounded"
                          >
                            Events
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://forms.gle/PhzpdZVWv1gyUXVr5"
                            target="_blank"
                            className="block py-2 px-3 rounded"
                          >
                            Career
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="py-[6%]  w-full flex flex-wrap">
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-start text-white w-[90%] ITC_Avant_Garde_Gothic_Std_Medium">
                    <p className="text-4xl sm:text-7xl">
                      Putting India On The
                      <span className="bg-gradient-to-b from-pink-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        Web3
                      </span>{" "}
                      Global Radar
                    </p>
                  </div>
                  <p className="text-white ITC_Avant_Garde_Gothic_Std_Light mt-9">
                    Explore the Global Applications And Worldwide Adoptions Of
                    ICP
                  </p>
                  <a href="https://t.me/icphub_IN" target="_blank">
                    <button className="px-8  ITC_Avant_Garde_Gothic_Std_Bold py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white border-2 border-white mt-8">
                      Join Now
                    </button>
                  </a>
                </div>
                <div className="w-full flex justify-center Earth-image items-start">
                  <img
                    className="w-[65%] Earth-image "
                    src={earth}
                    alt="Earth"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
