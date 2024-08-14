import React from "react";
import in1 from "../assets/in1.png";
import in2 from "../assets/in2.png";
import in3 from "../assets/in3.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import c4 from "../assets/c4.png";
import "../App.css";
import Mentor from "./Mentor";

const Inclubotor = () => {
  return (
    <div id="about" className="custom-pink-gradient px-4 lg:px-[5%] w-full py-16">
      {/* Heading and Paragraph Section */}
      <div className="flex justify-center items-center text-center h-[150px]">
        <h3 className="text-[42px] leading-[50px] text-purple-700 ITC_Avant_Garde_Gothic_Std_Medium ">
          What is {" "}
          <span className="bg-gradient-to-b from-pink-500 to-purple-800 text-transparent bg-clip-text">
            Crewsphere ?
          </span>
        </h3>
      </div>

      {/* Image Sections */}

      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-4 md:gap-8 md:py-4">
        <div className="relative h-52 text-3xl font-extrabold flex items-end">
          <div className="absolute h-full inset-0 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${g1})` }}>
            <div className="absolute h-full w-full bg-[#05071D] opacity-70 rounded-xl"></div>
          </div>
          <div className="relative p-4 text-white opacity-100 flex flex-col flex-wrap w-30 ">
            <div className="flex gap-2 circularxx ">
              We exhibit
            </div>
            <div className="circularxx ">
              Humility
            </div>
          </div>
        </div>
        <div className="relative h-52 text-3xl font-extrabold flex items-end">
          <div className="absolute inset-0 bg-cover bg-center rounded-xl " style={{ backgroundImage: `url(${g3})` }}>
            <div className="absolute h-full w-full bg-[#05071D] opacity-70 rounded-xl"></div>
          </div>
          <div className="relative p-4 text-white opacity-100 flex flex-col flex-wrap w-30">
            <div className="flex gap-2 circularxx ">
              We conduct ourselves
            </div>
            <div className="circularxx ">
              with Integrity
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-4 md:gap-8 md:py-4">
        <div className="div-1 relative min-h-52 text-3xl font-extrabold flex items-end">
          <div
            className="absolute h-full inset-0 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${g2})` }}
          >
            <div className="absolute h-full w-full bg-[#05071D] opacity-70 rounded-xl"></div>
          </div>
          <div className="relative p-4 text-white opacity-100 flex flex-col flex-wrap w-full">
            <div className="flex gap-2 circularxx">
              We maintain an open
            </div>
            <div className="circularxx">
              approach
            </div>
          </div>
        </div>
        <div className="div-2 relative min-h-52 text-3xl font-extrabold flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${g4})` }}
          >
            <div className="absolute h-full w-full bg-[#05071D] opacity-70 rounded-xl"></div>
          </div>
          <div className="relative p-4 text-white opacity-100 flex flex-col sm:flex-row w-full flex-wrap lg:gap-4 sm:items-end">
            <div className="sm:w-[68%] flex gap-2">
              <div className="circularxx">
                We take ownership of  our actions
              </div>
            </div>
            <div className="w-[40%] sm:w-[28%]">
              <img src={c4} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>


      {/* Incubator Program Section */}
      <div className="bg-custom-pink-gradient">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">

          <div className="relative">
            <a href="https://build.crewsphere.io/">
              <img src={in1} alt="incubator" className="w-[100%] h-[98%]" />
              <div className="absolute inset-0 flex justify-start items-start md:w-[110%] lg:w-[90%] xl:w-[70%] 02xl:w-[65%] text-white font-semibold text-[30px] sm:text-[38px]">
                <p className="px-5  py-12 flex flex-wrap items-center gap-5 ITC_Avant_Garde_Gothic_Std_Light">
                  Visit Our Incubator Program
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M19.5638 15.8812L19.5248 0.845108L4.48871 0.806092C4.33205 0.784883 4.17267 0.797579 4.02135 0.84332C3.87003 0.889062 3.73031 0.966784 3.61163 1.07122C3.49296 1.17566 3.39812 1.30437 3.33351 1.44865C3.26891 1.59293 3.23606 1.74941 3.23719 1.90749C3.23832 2.06557 3.2734 2.22156 3.34006 2.3649C3.40671 2.50824 3.50339 2.63559 3.62354 2.73832C3.74369 2.84105 3.88452 2.91677 4.03647 2.96034C4.18843 3.00392 4.34798 3.01434 4.50431 2.99089L15.7716 3.03771L0.844778 17.9646C0.637834 18.1715 0.521573 18.4522 0.521574 18.7448C0.521573 19.0375 0.637834 19.3182 0.844778 19.5251C1.05172 19.7321 1.3324 19.8483 1.62506 19.8483C1.91773 19.8483 2.1984 19.7321 2.40535 19.5251L17.3322 4.59828L17.379 15.8656C17.38 16.1584 17.4974 16.4388 17.7052 16.6452C17.9129 16.8515 18.1942 16.9668 18.487 16.9658C18.7798 16.9648 19.0603 16.8474 19.2666 16.6396C19.4729 16.4319 19.5883 16.1506 19.5872 15.8578L19.5638 15.8812Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <a href="https://forms.gle/PhzpdZVWv1gyUXVr5" target="_blank">
                <img src={in2} alt="Planning" className="w-full" />
                <div className="absolute inset-0 f items-end text-white font-semibold text-[30px] sm:text-[38px]  ">
                  <p className="w-full py-0 md:py-20 flex ITC_Avant_Garde_Gothic_Std_Light items-center mt-12 sm:mt-32 md:mt-5 lg:mt-20 px-5 gap-5">
                    Career With Us
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5638 15.8812L19.5248 0.845108L4.48871 0.806092C4.33205 0.784883 4.17267 0.797579 4.02135 0.84332C3.87003 0.889062 3.73031 0.966784 3.61163 1.07122C3.49296 1.17566 3.39812 1.30437 3.33351 1.44865C3.26891 1.59293 3.23606 1.74941 3.23719 1.90749C3.23832 2.06557 3.2734 2.22156 3.34006 2.3649C3.40671 2.50824 3.50339 2.63559 3.62354 2.73832C3.74369 2.84105 3.88452 2.91677 4.03647 2.96034C4.18843 3.00392 4.34798 3.01434 4.50431 2.99089L15.7716 3.03771L0.844778 17.9646C0.637834 18.1715 0.521573 18.4522 0.521574 18.7448C0.521573 19.0375 0.637834 19.3182 0.844778 19.5251C1.05172 19.7321 1.3324 19.8483 1.62506 19.8483C1.91773 19.8483 2.1984 19.7321 2.40535 19.5251L17.3322 4.59828L17.379 15.8656C17.38 16.1584 17.4974 16.4388 17.7052 16.6452C17.9129 16.8515 18.1942 16.9668 18.487 16.9658C18.7798 16.9648 19.0603 16.8474 19.2666 16.6396C19.4729 16.4319 19.5883 16.1506 19.5872 15.8578L19.5638 15.8812Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
            <div className="relative">
              <a href="https://lu.ma/icphub_IN" target="_blank">
                <img src={in3} alt="Events" className="w-full" />
                <div className="absolute inset-0 flex items-start pt-10 pl-10 text-white font-semibold text-[30px] sm:text-[38px]  ">
                  <p className="w-full ITC_Avant_Garde_Gothic_Std_Light flex  items-center  gap-5">
                    Our Events
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" relative top-1"
                    >
                      <path
                        d="M19.5638 15.8812L19.5248 0.845108L4.48871 0.806092C4.33205 0.784883 4.17267 0.797579 4.02135 0.84332C3.87003 0.889062 3.73031 0.966784 3.61163 1.07122C3.49296 1.17566 3.39812 1.30437 3.33351 1.44865C3.26891 1.59293 3.23606 1.74941 3.23719 1.90749C3.23832 2.06557 3.2734 2.22156 3.34006 2.3649C3.40671 2.50824 3.50339 2.63559 3.62354 2.73832C3.74369 2.84105 3.88452 2.91677 4.03647 2.96034C4.18843 3.00392 4.34798 3.01434 4.50431 2.99089L15.7716 3.03771L0.844778 17.9646C0.637834 18.1715 0.521573 18.4522 0.521574 18.7448C0.521573 19.0375 0.637834 19.3182 0.844778 19.5251C1.05172 19.7321 1.3324 19.8483 1.62506 19.8483C1.91773 19.8483 2.1984 19.7321 2.40535 19.5251L17.3322 4.59828L17.379 15.8656C17.38 16.1584 17.4974 16.4388 17.7052 16.6452C17.9129 16.8515 18.1942 16.9668 18.487 16.9658C18.7798 16.9648 19.0603 16.8474 19.2666 16.6396C19.4729 16.4319 19.5883 16.1506 19.5872 15.8578L19.5638 15.8812Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Mentor />
      </div>
    </div>
  );
};

export default Inclubotor;
