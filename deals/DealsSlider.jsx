// // DealsSlider.jsx
// import React from "react";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import DealCard from "../utils/DealCard";

// const deals = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/320x260",
//     category: "Yoga & Pilates Instructors",
//     heading: "The Rusty Spur Saloon",
//     title: "Yogasana Workshop",
//     location: "Sector 21, Gurugram, India",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/320x260",
//     category: "Personal Trainers & Gym Programs",
//     heading: "The Rusty Spur Saloon",
//     title: "Yogasana Workshop",
//     location: "Sector 21, Gurugram, India",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/320x260",
//     category: "Wellness Retreats & Staycations",
//     heading: "The Rusty Spur Saloon",
//     title: "Yogasana Workshop",
//     location: "Sector 21, Gurugram, India",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/320x260",
//     category: "Hair & Beauty",
//     heading: "Urban Style Studio",
//     title: "Salon Discount",
//     location: "Rajouri Garden, Delhi",
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/320x260",
//     category: "Spa & Massage ",
//     heading: "Heaven Spa",
//     title: "Relaxing Massage",
//     location: "Noida Sector 18, India",
//   },
// ];

// const NextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label="Next"
//     className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
//     style={{ transform: "translate(50%, -50%)" }}
//   >
//     <FaChevronRight size={20} />
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label="Previous"
//     className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
//     style={{ transform: "translate(-50%, -50%)" }}
//   >
//     <FaChevronLeft size={20} />
//   </button>
// );

// export default function DealsSlider() {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 400,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
    
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 2.5 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="relative max-w-[1280px] mx-auto px-8 py-10 bg-white overflow-visible">
//       {/* Heading with big background text */}
//       <div className="relative mb-6">
//         <h2 className="text-2xl font-bold relative z-10">Deals for You</h2>
//         <span
//           className="absolute left-0 top-full text-7xl font-extrabold text-orange-200 opacity-20 pointer-events-none select-none whitespace-nowrap"
//           style={{ userSelect: "none", transform: "translate(-20px, 0)" }}
//         >
//           DEALS
//         </span>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             style={{ paddingRight: 16, boxSizing: "border-box" }}
//           >
//             <DealCard {...deal} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
import React from "react";
import FilterIcon from "../assets/rivet-icons_filter.svg";
import CategoriesIcon from "../assets/iconamoon_category-light.svg";
import DistanceIcon from "../assets/mdi_map-marker-distance.svg";
import ArrowIcon from "../assets/weui_arrow-filled (1).svg";
import DealCardGrid from "./DealCardGrid";
import PartnerSection from "../home/PartnerSection";

function DealSlider() {
  return (
    <div className="bg-white w-full overflow-visible">
      <div className="max-w-7xl mx-[50px] px-6 sm:px-6 lg:px-4 pt-[130px] pb-[20px] relative">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="font-montserrat text-3xl sm:text-4xl font-semibold text-black leading-tight">
            Exclusive Deals -{" "}
            <span className="font-normal">Skin, Hair & Beauty</span>
          </h2>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* Filters Button */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
            <img src={FilterIcon} alt="Filters" className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Categories Dropdown */}
          <div className="flex-1 sm:flex-none sm:w-[280px] relative">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative">
              <img src={CategoriesIcon} alt="Categories" className="w-5 h-5" />
              <select
                className="w-full bg-transparent outline-none text-gray-600 font-medium appearance-none pr-10 z-10 relative"
              >
                <option>Categories</option>
                <option>Hair Treatments</option>
                <option>Salons</option>
              </select>
              {/* Arrow Icon */}
              <img
                src={ArrowIcon}
                alt="Arrow"
                className="w-[20px] h-[18px] absolute right-4 pointer-events-none z-20"
                style={{
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                  filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)",
                }}
              />
            </div>
          </div>

          {/* Distance Dropdown */}
          <div className="flex-1 sm:flex-none sm:w-[200px] relative">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white relative">
              <img src={DistanceIcon} alt="Distance" className="w-5 h-5" />
              <select
                className="w-full bg-transparent outline-none text-gray-600 font-medium appearance-none pr-10 z-10 relative"
              >
                <option>Distance</option>
                <option>Nearby (0 - 5km)</option>
                <option>5 - 10km</option>
                <option>10 -25km</option>
                <option>25 - 50km</option>
              </select>
              {/* Arrow Icon */}
              <img
                src={ArrowIcon}
                alt="Arrow"
                className="w-[25px] h-[18px] absolute right-4 pointer-events-none z-20"
                style={{
                  top: "50%",
                  transform: "translateY(-50%) rotate(90deg)",
                  filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
        <div className="bg-white w-full">
          <DealCardGrid />
        </div>
          <div className="hidden md:flex justify-center"><PartnerSection/></div>
      </div>
    </div>
  );
}

export default DealSlider;