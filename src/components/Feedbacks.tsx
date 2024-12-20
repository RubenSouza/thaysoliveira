"use client";

import FeedbackCard from "./FeedbackCard";
import Title from "./Title";
import feedbacks from "../data/feedbacks.json";
import { motion } from "framer-motion";
import { FeedbacksCarousel } from "./FeedbacksCarousel";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import Games from "./Games";
import Image from "next/image";

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
        <div className="flex items-center justify-between">
          <div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
            >
              <Title title="Feedbacks" line="w-[78px]" />
            </motion.div>
            <motion.h2
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-semibold 
          text-primary-100 font-serif py-2"
            >
              Clientes felizes dizem
            </motion.h2>
          </div>
          <div className="flex cursor-pointer">
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <Image
                width={400}
                height={400}
                src={arrowLeft}
                alt="arrow left"
                className="w-full h-full p-1 prev-button"
              />
            </div>
            <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
              <Image
                width={400}
                height={400}
                src={arrowRight}
                alt="arrow left"
                className="w-full h-full p-1 next-button"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <FeedbacksCarousel slides={feedbacksList} />
        </div>
      </div>
      <div id="games">
        <Games />
      </div>
    </div>
  );
};

export default Feedbacks;
