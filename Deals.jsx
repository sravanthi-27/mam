import React, { useRef } from 'react';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import DealCard from '../utils/DealCard';

function ServicesHeading() {
  const scrollRef = useRef();

  const DealsData = [
    { image: d1, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d2, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d3, heading: "Yogasana Workshop", title: "The Revitalizing Embrace ", location: "Gurugram, India" },
    { image: d4, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d5, heading: "Yogasana Workshop", title: "The Rusty Spur Saloon", location: "Gurugram, India" },
    { image: d6, heading: "Yogasana Workshop", title: "The Revitalizing Embrace ", location: "Gurugram, India" },
  ];

  const scrollLeft = () => {
    const cardWidth = window.innerWidth < 768 ? 233.28 + 24 : 300;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth = window.innerWidth < 768 ? 233.28 + 24 : 300;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FBFBFB] relative overflow-hidden py-10">
      
      {/* Background Text */}
      {/* Desktop/Tablet - absolute in background */}
      <h2 className="hidden md:block absolute left-0 top-[60px] text-[80px] lg:text-[140px] font-bold text-gray-200 uppercase select-none z-0 tracking-widest leading-none w-screen px-4">
        DEALS
      </h2>
      {/* Mobile - in normal flow above content
      <h2 className="block  md:hidden text-[40px] sm:text-[60px] font-bold text-gray-200 uppercase select-none tracking-widest leading-none px-4 mb-6">
        DEALS
      </h2> */}

      <div className="relative w-[90%] mx-auto py-8 md:py-20 z-10">
        
        {/* Heading + Line + View all */}
        <div className="flex items-center w-full">
          <h3 className="sm:text-xl md:text-2xl lg:text-4xl font-bold text-black tracking-wider whitespace-nowrap">
            DEALS AROUND YOU
          </h3>
          <div className="flex-1 mx-4 h-[2px] bg-black"></div>
          <Link to="/deals">
            <button className="text-sm sm:text-base text-[#BF6AE0] whitespace-nowrap">
              View all
            </button>
          </Link>
        </div>

        {/* Scrollable Deals */}
        <div className="relative mt-14">
          
          {/* Left button - hidden on mobile */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto no-scrollbar scroll-smooth 
              sm:pr-0 pr-[calc(233.28px/2+12px)]
            "
            style={{ scrollSnapType: "x mandatory" }}
          >
            {DealsData.map((deal, idx) => (
              <Link
                key={idx}
                to={`/deals/${idx + 1}`}
                className="
                  flex-shrink-0 scroll-snap-align-start
                  w-[233.28px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-12px)] lg:w-[calc(25%-12px)]
                "
              >
                <DealCard {...deal} />
              </Link>
            ))}
          </div>

          {/* Right button - hidden on mobile */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesHeading;
