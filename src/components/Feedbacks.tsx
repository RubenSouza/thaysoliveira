import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";
import FeedbacksCarousel from "./FeedbacksCarousel";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

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
  return (
    <div className="w-full px-4 md:px-0 md:w-[1200px] md:h-[620px] py-8 md:py-16">
      <Title title="Feedbacks" line="w-[78px]" />
      <div className="flex justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-100 font-serif py-2">
          Clientes Felizes Dizem
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
      <div className="pt-5 flex justify-between">
        <FeedbacksCarousel slides={feedbacksList} />
      </div>
    </div>
  );
};

export default Feedbacks;
