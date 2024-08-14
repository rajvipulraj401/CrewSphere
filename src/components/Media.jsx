import React, { useEffect, useRef, useState } from "react";
import "./Media.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../assets/image 1.jpg"
import image2 from "../assets/image 2.jpg"
import image3 from "../assets/image 3.jpg"
import image4 from "../assets/image 4.jpg"
import { EffectFade } from 'swiper/modules';


const Media = () => {
  const [swiperEffect, setSwiperEffect] = useState(true);
  const swiperRef = useRef(null);
  const cardContent = [
    {
      id: 1,
      image: "https://www.ceopunjab.gov.in/img/logo.png",
      name: "District Election Office",
      img: image1,
      title: "Crewsphere launches India’s first metaverse powered virtual model Polling Booth in association with District Election Office, Ludhiana",
      link: "https://theprint.in/ani-press-releases/crewsphere-launches-indias-first-metaverse-powered-virtual-model-polling-booth-in-association-with-district-election-office-ludhiana/2108740/"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBwy5oKxZFGzJwq5XwxLdw9BHro3C5aEEkg&s",
      name: "Crewsphere Founder",
      img: image2,
      title: "Crewsphere Founder Bandhul Bansal ने बताया की कैसे होगा हर Entrepreneur का बड़ा बनने का सपना पूरा",
      link: "https://www.abplive.com/videos/business/crewsphere-founder-bandhul-bansal-told-how-every-entrepreneur-s-dream-of-becoming-big-will-be-fulfilled-2686218"
    },
    {
      id: 3,
      image: "https://ugc.production.linktr.ee/c7eda68b-b758-4e37-8fdd-8c021278ed11_ICP-HUBS-NETWORK--1-.png?io=true&size=thumbnail-stack-v1_0",
      name: "ICP Global Community",
      img: image3,
      title: "Internet Computer Accelerates Global Expansion Following Massive ICP Global Community Townhall ANI PR 01 May, 2024 05:32 pm IST",
      link: "https://theprint.in/ani-press-releases/internet-computer-accelerates-global-expansion-following-massive-icp-global-community-townhall/2065361/"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHEQDfPs4fEPDArXy7GKA3-Qw2uCVjaxyAQ&s",
      name: "Web3 Entrepreneurs",
      img: image4,
      title: "Crewsphere: ICP India hub launches Groundbreaking Initiatives to Empower Web3 Entrepreneurs in India",
      link: "https://theprint.in/ani-press-releases/crewsphere-icp-india-hub-launches-groundbreaking-initiatives-to-empower-web3-entrepreneurs-in-india/2005625/"
    },
    {
      id: 1,
      image: "https://www.ceopunjab.gov.in/img/logo.png",
      name: "District Election Office",
      img: image1,
      title: "Crewsphere launches India’s first metaverse powered virtual model Polling Booth in association with District Election Office, Ludhiana",
      link: "https://theprint.in/ani-press-releases/crewsphere-launches-indias-first-metaverse-powered-virtual-model-polling-booth-in-association-with-district-election-office-ludhiana/2108740/"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBwy5oKxZFGzJwq5XwxLdw9BHro3C5aEEkg&s",
      name: "Crewsphere Founder",
      img: image2,
      title: "Crewsphere Founder Bandhul Bansal ने बताया की कैसे होगा हर Entrepreneur का बड़ा बनने का सपना पूरा",
      link: "https://www.abplive.com/videos/business/crewsphere-founder-bandhul-bansal-told-how-every-entrepreneur-s-dream-of-becoming-big-will-be-fulfilled-2686218"
    },
    {
      id: 3,
      image: "https://ugc.production.linktr.ee/c7eda68b-b758-4e37-8fdd-8c021278ed11_ICP-HUBS-NETWORK--1-.png?io=true&size=thumbnail-stack-v1_0",
      name: "ICP Global Community",
      img: image3,
      title: "Internet Computer Accelerates Global Expansion Following Massive ICP Global Community Townhall ANI PR 01 May, 2024 05:32 pm IST",
      link: "https://theprint.in/ani-press-releases/internet-computer-accelerates-global-expansion-following-massive-icp-global-community-townhall/2065361/"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHEQDfPs4fEPDArXy7GKA3-Qw2uCVjaxyAQ&s",
      name: "Web3 Entrepreneurs",
      img: image4,
      title: "Crewsphere: ICP India hub launches Groundbreaking Initiatives to Empower Web3 Entrepreneurs in India",
      link: "https://theprint.in/ani-press-releases/crewsphere-icp-india-hub-launches-groundbreaking-initiatives-to-empower-web3-entrepreneurs-in-india/2005625/"
    },
    
  ];

  const handleMouseEnter = () => {
    setSwiperEffect(false);
  };

  const handleMouseLeave = () => {
    setSwiperEffect(true);
  };

  useEffect(() => {
    if (swiperEffect) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
  }, [swiperEffect])


  return (
    <div id="Events" className="md:px-[4%] mt-20 md:py-[4%] text-white">
      <div className="flex circularxx text-center justify-center items-center text-[#632084] flex-col gap-2">
        <h1 className="text-4xl  ">Latest <span className="bg-gradient-to-b from-[#FF0079] to-[#632084] bg-clip-text text-transparent">Media</span> Coverage</h1>
        <p className=" text-md">CrewSphere ICP India Hub Media Coverage</p>
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper  onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          infinite={true}
          spaceBetween={20}
          allowSlideNext={true}
          loop={true}
          slideToClickedSlide={true}
          autoplay={swiperEffect ? { delay: 1500, disableOnInteraction: false } : false}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper mt-6" 
        >
          {cardContent.map((card, index) => (
            <SwiperSlide className="flex justify-around" 
            key={index}>
              <a target="_blank" href={card.link} >
                <div key={card.id} className="bg-[#767DFF] min-h-[500px] sm:min-h-[580px] md:min-h-[550px] lg:min-h-[580px] p-4 rounded-lg mt-2 flex  flex-col cart-min-h items-center text-center sm:text-start">
                  <div className="flex justify-center gap-4 sm:gap-0 sm:justify-normal items-center mb-6 flex-wrap">
                    <img src={card.image} className="w-5 rounded-full" alt="logo1" />
                    <h1 className="w-auto circularxx  text-xl">{card.name}</h1>
                  </div>
                  <img src={card.img} alt="logo" className="mb-4  w-[323px] h-[287px] md:h-[280px]" />
                  <h1 className="text-xl circularxx ">{card.title}</h1>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Media;