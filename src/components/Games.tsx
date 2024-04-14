import Title from "./Title";
import { motion } from "framer-motion";

import games from "../data/games.json";

const Games = () => {
  const landscapeImages = games.map(game => {
    return game?.photo;
  });
  const imagesList = landscapeImages;

  const images = imagesList.map((image, i) => {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        className="w-full border-[1px]
              border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer transform "
        key={i}
      >
        <img
          src={image}
          alt="game"
          className="w-full h-[240px] rounded-xl md:object-fill "
        />
      </motion.div>
    );
  });

  return (
    <div className="w-full px-4 md:px-0 md:w-[1200px] py-5 md:py-10">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-between items-center md:items-start md:pt-8"
      >
        <Title title="Materiais didáticos" line="w-[136px]" />
      </motion.div>
      <div className="w-full py-6 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {images}
      </div>
    </div>
  );
};

export default Games;
