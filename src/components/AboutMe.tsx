"use client";

import Image from "next/image";
import crianca from "../assets/criancaPng2.webp";
import Title from "../components/Title";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className="w-full h-full lg:w-[1100px] 2xl:w-[1200px] py-5 
    md:py-10 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="py-4"
      >
        <Title title="Sobre mim" line="w-[81px]" />
      </motion.div>
      <div
        className="w-full h-full md:flex md:justify-between items-center
        px-4 md:px-0 "
      >
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center xl:justify-start"
        >
          <Image
            alt="criança"
            width={400}
            height={400}
            src={crianca}
            className="w-[200px] md:w-[450px] 2xl:w-[500px] "
          />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="w-full text-sm md:w-[550px] space-y-6 py-6"
        >
          <h2 className="text-xl md:text-4xl font-semibold text-primary-200">
            A vida é uma música e a nossa história é a letra
          </h2>
          <div className="text-base text-gray-400 font-bold">
            <p>
              Licencianda em música e apaixonada pela arte de ensinar. Toco
              desde os 6 anos de idade e hoje tenho a oportunidade de lecionar,
              dessa forma, ajudo outras pessoas a realizarem o sonho de tocar um
              instrumento musical.
            </p>
            <p>
              Sou professora há 5 anos, ensinei em escola de música e,
              atualmente, de forma particular, à domicílio.
            </p>
            <p>
              Além de lecionar, atuo como cantora no cenário gospel da minha
              cidade e região, com alguns trabalhos como Cd&apos;s e um EP nas
              principais plataformas digitais.
            </p>
            <p>
              Estou sempre em busca de uma constante evolução, tanto como
              pessoa, como também musicista e professora. Eternamente grata a
              Deus por trabalhar com o que amo!
            </p>
          </div>

          <div>
            <ul className="list-none text-base">
              <li className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-200 mr-2" />
                Aulas semanais
              </li>
              <li className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-200 mr-2" />
                Cronograma personalizado
              </li>
              <li className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-200 mr-2" />
                Repertório musical personalizado
              </li>
              <li className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-200 mr-2" />
                Eventos musicais
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
