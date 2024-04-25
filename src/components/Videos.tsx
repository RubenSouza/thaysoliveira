import ThaysVideo from "./ThaysVideo";
import Title from "./Title";
import { motion } from "framer-motion";

const Videos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full md:h-[500px] flex flex-col 
    items-center justify-start md:w-[1200px] py-5 md:py-10 "
    >
      <Title title="Vídeos" line="w-[50px]" />
      <div
        className="w-full px-4 md:px-0 my-auto flex flex-col md:flex-row 
      md:justify-between space-y-4 md:space-y-0 pt-10"
      >
        <ThaysVideo videoId="u-WY05TNY60" />
        <ThaysVideo videoId="he4gnkr654A" />
      </div>
    </motion.div>
  );
};

export default Videos;
