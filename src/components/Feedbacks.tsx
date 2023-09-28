import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";
import FeedbacksCarousel from "./FeedbacksCarousel";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import game01 from "../assets/games/01.jpg";
import game02 from "../assets/games/02.jpg";
import game03 from "../assets/games/03.jpg";
import game04 from "../assets/games/04.jpg";
import game05 from "../assets/games/05.jpg";

const Feedbacks = () => {
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

  const images = [game01, game02, game03, game04, game05];

  const imagesList = images.map((image, i) => {
    return (
      <div
        className="w-full md:w-[580px] h-[290px] md:h-[360px] border-[1px] 
      border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer 
      bg-primary-100"
        key={i}
      >
        <img
          src={image}
          alt="game"
          className="w-full h-full rounded-xl object-fill"
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
        <div className="flex justify-between">
          <Title title="Games" line="w-[52px]" />
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
        <div className="pt-5 flex justify-between">
          <FeedbacksCarousel slides={imagesList} />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
