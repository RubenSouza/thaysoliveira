import Title from "./Title";
import { motion } from "framer-motion";
import GameCarousel from "./GameCarousel";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
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
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="w-full border-[1px]
              border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer transform "
        key={i}
      >
        <img
          src={image}
          alt="game"
          className="w-full h-[220px] md:w-[580px] md:h-[360px] 
          rounded-xl md:object-fill "
        />
      </motion.div>
    );
  });

  return (
    <div className="w-full px-4 md:px-0 lg:w-[1100px] 2xl:w-[1200px] py-5 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-between items-center md:items-start md:pt-8 px-4"
      >
        <Title title="Materiais didáticos" line="w-[136px]" />
        <div className="flex cursor-pointer">
          <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
            <img
              src={arrowLeft}
              alt="arrow left"
              className="w-full h-full p-1 game-prev-button"
            />
          </div>
          <div className="w-[35px] h-[35px] border-[2px] border-primary-200">
            <img
              src={arrowRight}
              alt="arrow left"
              className="w-full h-full p-1 game-next-button"
            />
          </div>
        </div>
      </motion.div>
      <div className="w-full px-4 pt-4">
        <GameCarousel slides={images} />
      </div>
    </div>
  );
};

export default Games;
