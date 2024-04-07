import crianca from "../assets/criancaPng2.png";
import Title from "./Title";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className="w-full h-full lg:w-[1100px] 2xl:w-[1200px] py-5 md:py-10 
    flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-4"
      >
        <Title title="Sobre mim" line="w-[81px]" />
      </motion.div>
      <div
        className="w-full h-full md:flex md:justify-between items-center
        px-4 md:px-0 "
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center xl:justify-start"
        >
          <img
            src={crianca}
            className="w-[200px] md:w-[450px] 2xl:w-[500px] "
          />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-sm md:w-[550px] space-y-6 py-6"
        >
          <h2 className="text-xl md:text-4xl font-semibold text-primary-200">
            A vida é uma música e a nossa história é a letra
          </h2>
          <div className="text-base text-gray-400 font-bold">
            <p>
              Licenciando em música e apaixonada pela arte de ensinar. Toco
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
              cidade e região, com alguns trabalhos como Cd's e um EP nas
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

{
  /* <div
className="md:flex md:justify-between
items-center  w-full px-4 md:px-0  2xl:py-10"
>
<img
  src={fundoroxo}
  className="w-[90px] bg-clip-text float-right m-2 md:hidden rounded-full"
/>
<div className="w-full md:w-[490px] space-y-2 text-xs md:text-sm">
  <h2 className="text-lg md:text-3xl font-semibold text-primary-200">
    A vida é uma música e a nossa história é a letra
  </h2>
  <p>
    A música nos proporciona diversos benefícios como: estimula a
    criatividade, melhora a concentração, a socialização, diminui o
    estresse… Inclusive, exerce um papel importantíssimo no
    desenvolvimento das crianças. Meu objetivo é contribuir com o seu
    crescimento musical e te ajudar a realizar o sonho de tocar um
    instrumento, mesmo sem nunca ter tido contato com um.
  </p>
  <p>
    As aulas acontecem uma vez na semana no melhor horário para ambas as
    partes. Possuímos um cronograma de estudos e repertório musical
    personalizado de acordo com o gosto e o tempo de cada aluno. Além
    disso, realizamos um evento lindo em que todos os alunos terão a
    oportunidade de mostrar seu crescimento e desenvolvimento musical
    aos seus amigos e familiares. Acompanhe um pouco desse momento na
    sessão alunos.
  </p>
</div>
<img
  src={fundoroxo}
  className="lg:w-[250px] 2xl:w-[350px] hidden md:inline rounded-full"
/>
</div> */
}
