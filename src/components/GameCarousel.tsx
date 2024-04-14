/* eslint-disable @typescript-eslint/no-explicit-any */
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GameCarousel = ({ slides }: any) => {
  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        slidesPerView={2}
        navigation={{
          nextEl: ".game-next-button",
          prevEl: ".game-prev-button",
        }}
        style={{ direction: "rtl" }} // Defina a direção como RTL
      >
        {slides.map((slide: any, i: number) => {
          return <SwiperSlide key={i}>{slide}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default GameCarousel;
