import crianca from "../assets/crianca.svg";
import purpleimg from "../assets/purpleimg.svg";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="w-full md:w-[1200px] py-10">
      <div
        className="w-full md:flex md:justify-between items-center space-y-2 
        px-6 md:px-0"
      >
        <img
          src={crianca}
          className="w-[130px] md:w-[400px] bg-clip-text float-right m-3 md:m-0 pt-4"
        />
        <div className="w-full text-sm md:w-[490px] space-y-2">
          <Title title="Sobre mim" line="w-[81px]" />
          <div className="space-y-2">
            <p>
              Amante da música e apaixonada pela arte de ensinar. Toco desde os
              6 anos de idade e hoje tenho a oportunidade de lecionar, dessa
              forma, ajudo outras pessoas a realizarem o sonho de tocar um
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
        </div>
      </div>
      <div
        className="md:flex md:justify-between
       items-center py-10 w-full px-6 md:px-0"
      >
        <img
          src={purpleimg}
          className="w-[130px] bg-clip-text float-right m-3 md:hidden"
        />
        <div className="w-full md:w-[490px] space-y-2 text-sm">
          <h2 className="text-lg md:text-3xl font-semibold text-primary-200">
            A vida é uma música e a nossa história é a letra
          </h2>
          <p>
            A música nos proporciona diversos benefícios como: estimula a
            criatividade, melhora a concentração, a socialização, diminui o
            estresse… Inclusive, exerce um papel importantíssimo no
            desenvolvimento das crianças. Aprender um instrumento musical na
            infância pode oferecer diversos benefícios, tais como; melhora a
            capacidade de atenção, aumenta a autoestima, além de auxiliar de
            forma direta no processo cognitivo dos nossos pequenos.
          </p>
          <p>
            Meu objetivo é contribuir com o seu crescimento musical e te ajudar
            a realizar o sonho de tocar um instrumento, mesmo sem nunca ter tido
            contato com um.
          </p>
        </div>
        <img src={purpleimg} className="w-[400px] hidden md:inline" />
      </div>
    </div>
  );
};

export default AboutMe;
