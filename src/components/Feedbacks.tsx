import FeedbackCard from "./FeedbackCard";
import Title from "./Title";

const Feedbacks = () => {
  return (
    <div className="w-[1200px] h-[600px] py-20">
      <Title title="Feedbacks" line="w-[78px]" />
      <div>
        <h2 className="text-4xl font-semibold text-primary-100 font-serif">
          Clientes Felizes Dizem
        </h2>
      </div>
      <div className="pt-5 flex justify-between">
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Feedbacks;
