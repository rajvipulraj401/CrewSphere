  import d from "../assets/d.png";
  import b from "../assets/b.png";
  import "../App.css";

  const Mentor = () => {
    return (
      <div id="Incubator">
        <div className="text-[#632084] ml-[5%] sm:ml-0 flex justify-center items-center">
          <div>
            <p className=" text-[18px] font-bold ITC_Avant_Garde_Gothic_Std_Medium mt-8 ">OUR MENTOR</p>
            <p className="md:text-4xl text-2xl ITC_Avant_Garde_Gothic_Std_Medium  w-full">
              {`Discover the Minds Shaping Our\u00A0`}
              <span className="bg-gradient-to-b from-[#FF0079] to-[#632084] text-transparent bg-clip-text">
                {`Success`}
              </span>
            </p>
          </div>
        </div>

        <div className="flex  items-center justify-center p-4 mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 justify-items-center w-full">
            <div className="group relative cursor-pointer rounded-[45px] items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div className="md:h-[500px] md:w-[376px] ">
                <img
                  className="h-full m-auto object-cover transition-transform rounded-3xl group-hover:filter group-hover:grayscale"
                  src={b}
                  alt="Bandhul Bansal"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent rounded-3xl"></div>
              <div className="absolute m-auto inset-0 flex translate-y-[80%] sm:translate-y-[83%] md:translate-y-[85%] px-5 pt-2 md:px-10 md:pt-4 rounded-[33px] flex-col text-center transition-all duration-500 group-hover:translate-y-10 bg-gray-300 bg-opacity-85 items-center ">
                <h1 className="text-2xl ITC_Avant_Garde_Gothic_Std_Medium text-black">
                  Bandhul Bansal
                </h1>
                <div className="flex flex-row text-center items-center">
                  <a href="https://www.linkedin.com/in/bandhul-bansal-09b0a1114/" target="_blank">
                  <h2 className="text-md ITC_Avant_Garde_Gothic_Std_Medium text-gray-600">
                    CO-FOUNDER . <span className="text-black ITC_Avant_Garde_Gothic_Std_Medium">in</span>
                  </h2>
                  </a>
                </div>
                <p className="mb-3 text-lg  text-black text-start opacity-20 transition-opacity duration-300 ITC_Avant_Garde_Gothic_Std_Medium group-hover:opacity-100 mt-2 overflow-y-auto hidden-scrollbar">
                Bandhul is an entrepreneur turned investor who co-founded Finstreet, a crypto-based ed-marketing platform in India. He advises Mining Devs, a blockchain edtech platform, and Cryptic Entertainments, an edutainment company promoting crypto awareness. His finance expertise makes him a regular speaker at IITs and IIMs.
                </p>
              </div>
            </div>
            <div className="group relative cursor-pointer sm:ml-10 items-center justify-center rounded-[45px] overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="md:h-[500px] md:w-[376px]">
                <img
                  className="h-full  m-auto object-cover transition-transform rounded-3xl group-hover:filter group-hover:grayscale"
                  src={d}
                  alt="Deepak Goyal"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent rounded-xl"></div>
              <div className="absolute m-auto inset-0 flex translate-y-[79%] sm:translate-y-[83%] md:translate-y-[85%] px-5 pt-3 md:px-10 md:pt-4 rounded-[33px] flex-col text-center transition-all duration-500 group-hover:translate-y-10 bg-gray-300 bg-opacity-85 items-center ">
             
                <h1 className="ITC_Avant_Garde_Gothic_Std_Medium text-2xl ITC_Avant_Garde_Gothic_Std_Medium text-black">
                  Deepak Goyal
                </h1>
                <div className="flex flex-row space-x-2 text-center items-center">
                <a href="https://www.linkedin.com/in/deepak-goyal-%E2%88%9E-1511ab7/" target="_blank">
                  <h2 className="text-md ITC_Avant_Garde_Gothic_Std_Medium text-gray-600">
                    CO-FOUNDER . <span className="text-blackITC_Avant_Garde_Gothic_Std_Medium">in</span>
                  </h2>
                </a> 
                </div>
                <p className="mb-3 text-lg text-black text-start opacity-20 transition-opacity duration-300 ITC_Avant_Garde_Gothic_Std_Medium group-hover:opacity-100 mt-2 overflow-y-auto hidden-scrollbar">
                  An IIT Delhi CS passout, Deepak has been deep into Education for
                  12+ years. He has mentored many of his students in shaping their
                  career paths and in starting their startup journeys. Being part
                  of many startups himself, he understands the ethos of the
                  startup world and has off-late ventured into Web3.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Mentor;
