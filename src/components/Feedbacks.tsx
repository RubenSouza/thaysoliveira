import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";
import FeedbacksCarousel from "./FeedbacksCarousel";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

import landscape1 from "../assets/games/landscape/01.jpg";
import landscape2 from "../assets/games/landscape/02.jpg";
import landscape3 from "../assets/games/landscape/03.jpg";
import landscape4 from "../assets/games/landscape/04.jpg";
import landscape5 from "../assets/games/landscape/05.jpg";
import landscape6 from "../assets/games/landscape/06.jpeg";
import landscape7 from "../assets/games/landscape/07.jpeg";
import landscape8 from "../assets/games/landscape/08.jpeg";

import portraitImage1 from "../assets/games/portrait/01.jpg";
import portraitImage2 from "../assets/games/portrait/02.jpg";
import portraitImage3 from "../assets/games/portrait/03.jpg";
import portraitImage4 from "../assets/games/portrait/04.jpg";
import portraitImage5 from "../assets/games/portrait/05.jpg";
import portraitImage6 from "../assets/games/portrait/06.jpeg";
import portraitImage7 from "../assets/games/portrait/07.jpeg";
import portraitImage8 from "../assets/games/portrait/08.jpeg";

import GameCarousel from "./GameCarousel";

const Feedbacks = () => {
  const [isMobile, setIsMobile] = useState(false);

  const feedbacksList = feedbacks.map((feedback, i) => {
    return (
      <FeedbackCard
        name={feedback.name}
        character={feedback.character}
        feedback={feedback.feedback}
        photo={feedback.photo}
        key={i}
      />
    );
  });

  const landscapeImage = [
    landscape1,
    landscape2,
    landscape3,
    landscape4,
    landscape5,
    landscape6,
    landscape7,
    landscape8,
  ];

  const portraitImages = [
    portraitImage1,
    portraitImage2,
    portraitImage3,
    portraitImage4,
    portraitImage5,
    portraitImage6,
    portraitImage7,
    portraitImage8,
  ];

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const imagesList = isMobile ? portraitImages : landscapeImage;

  const images = imagesList.map((image, i) => {
    return (
      <div
        className="bg-red-300 md:w-[580px] md:h-[360px] border-[1px]
              border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer transform "
        key={i}
      >
        <img
          src={image}
          alt="game"
          className="w-full h-full rounded-xl md:object-fill"
        />
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col md:w-[1200px]">
      {/* feedbacks */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] pt-4 md:pt-8">
        <Title title="Feedbacks" line="w-[78px]" />
        <div className="flex justify-between">
          <h2 className="text-xl md:text-3xl font-semibold text-primary-100 font-serif py-2">
            Clientes felizes dizem
          </h2>
          <div className="flex cursor-pointer">
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <img
                src={arrowLeft}
                alt="arrow left"
                className="w-full h-full p-1 prev-button"
              />
            </div>
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <img
                src={arrowRight}
                alt="arrow left"
                className="w-full h-full p-1 next-button"
              />
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-between">
          <FeedbacksCarousel slides={feedbacksList} />
        </div>
      </div>

      {/* games */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] py-4 md:py-8">
        <div className="flex justify-between items-center md:items-start">
          <Title title="Materiais didáticos" line="w-[136px]" />
          <div className="flex cursor-pointer">
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <img
                src={arrowLeft}
                alt="arrow left"
                className="w-full h-full p-1 game-prev-button"
              />
            </div>
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <img
                src={arrowRight}
                alt="arrow left"
                className="w-full h-full p-1 game-next-button"
              />
            </div>
          </div>
        </div>
        <div className="py-1 md:px-1 flex md:pt-5 md:justify-between ">
          <GameCarousel slides={images} />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
