import crianca from "../assets/crianca.svg";
import fundoroxo from "../assets/fundoroxo.jpg";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="w-full md:w-[1200px] md:py-10">
      <div
        className="w-full md:flex md:justify-between items-center space-y-2 
        px-4 md:px-0"
      >
        <img
          src={crianca}
          className="w-[130px] md:w-[400px] bg-clip-text float-right m-2 md:m-0 "
        />
        <div className="w-full text-sm md:w-[490px] space-y-2">
          <Title title="Sobre mim" line="w-[81px]" />
          <div className="space-y-2 text-xs md:text-sm">
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
       items-center py-10 w-full px-4 md:px-0"
      >
        <img
          src={fundoroxo}
          className="w-[130px] bg-clip-text float-right m-2 md:hidden rounded-full"
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
          className="w-[400px] hidden md:inline rounded-full"
        />
      </div>
    </div>
  );
};

export default AboutMe;
