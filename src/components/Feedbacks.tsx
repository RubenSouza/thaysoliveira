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
    <div className="w-[1200px] h-[600px] py-20">
      <Title title="Feedbacks" line="w-[78px]" />
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold text-primary-100 font-serif">
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
