import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";
import { motion } from "framer-motion";
import FeedbacksCarousel from "./FeedbacksCarousel";

const Feedbacks = () => {
  const feedbacksList = feedbacks.map((feedback, i) => {
    return (
      <FeedbackCard
        name={feedback.name}
        character={feedback.character}
        feedback={feedback.feedback}
        photo={feedback.photo}
        index={feedback.id}
        key={i}
      />
    );
  });

  return (
    <div
      className="w-full flex flex-col lg:w-[1100px] 
      2xl:w-[1200px] py-5 md:py-10"
    >
      <div className="w-full px-4 pt-4 md:pt-8">
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title title="Feedbacks" line="w-[78px]" />
          </motion.div>
          <motion.h2
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-3xl font-semibold 
          text-primary-100 font-serif py-2"
          >
            Clientes felizes dizem
          </motion.h2>
        </div>
        <div className="w-full">
          <FeedbacksCarousel slides={feedbacksList} />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
