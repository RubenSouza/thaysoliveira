import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";

const Feedbacks = () => {
  const feedbacksList = feedbacks.map((feedback, i) => {
    return (
      <FeedbackCard
        name={feedback.name}
        character={feedback.character}
        feedback={feedback.feedback}
        key={i}
      />
    );
  });
  return (
    <div className="w-[1200px] h-[600px] py-20">
      <Title title="Feedbacks" line="w-[78px]" />
      <div>
        <h2 className="text-4xl font-semibold text-primary-100 font-serif">
          Clientes Felizes Dizem
        </h2>
      </div>
      <div className="pt-5 flex justify-between">{feedbacksList}</div>
    </div>
  );
};

export default Feedbacks;
