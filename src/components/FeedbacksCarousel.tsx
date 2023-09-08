/* eslint-disable @typescript-eslint/no-explicit-any */
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeedbacksCarousel = ({ slides }: any) => {
  return (
    <div className="w-full h-full ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        loop={true}
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
      >
        {slides.map((slide: any, i: number) => {
          return <SwiperSlide key={i}>{slide}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default FeedbacksCarousel;
