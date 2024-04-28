import quotes from "../assets/quotes.svg";
import { motion } from "framer-motion";

type Props = {
  name: string;
  character: string;
  photo?: string;
  feedback: string;
  index: number;
};

const FeedbackCard = ({ name, character, photo, feedback }: Props) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="w-ful h-[290px] md:h-[350px] border-[1px] 
    border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer"
    >
      <div className="flex px-8 pt-8 items-center justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full bg-primary-100 w-10 h-10 md:h-14 md:w-14
          flex items-center justify-center"
          >
            <img src={photo} className="w-full rounded-full p-[1px]" />
          </div>
          <div className="text-primary-600 px-3">
            <h3 className="text-base md:text-xl font-semibold">{name}</h3>
            <p className="text-[11px] md:text-sm">{character}</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-10" />
      </div>
      <div
        className="px-8 py-5 text-primary-600 
      text-base"
      >
        {feedback}
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
