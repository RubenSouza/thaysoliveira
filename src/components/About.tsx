import Image from 'next/image';

export default function About() {
  return (
    <section id='sobre' className='content-section'>
      <div className='container'>
        <h2>Sobre Mim</h2>
        <div className='sobre-flex'>
          <div className='sobre-img'>
            <Image
              src='/assets/thayskid.png'
              alt='Foto de Thays Oliveira criança'
              width={420}
              height={420}
              className='disable-interaction'
            />
          </div>
          <div className='sobre-text'>
            <h3>A vida é uma música, e a nossa história é a sua letra.</h3>
            <p>
              Sou licencianda em Música e apaixonada pela arte de ensinar. Toco
              desde os 6 anos de idade e, hoje, tenho a oportunidade de
              lecionar, ajudando outras pessoas a realizarem o sonho de tocar um
              instrumento musical. Sou professora há 5 anos, com experiência em
              escola de música e, atualmente, atuo de forma particular, em
              domicílio. Além das aulas, atuo como cantora no cenário gospel da
              minha cidade e região, com trabalhos autorais disponíveis em CD e
              em um EP nas principais plataformas digitais. Estou sempre em
              busca de evolução constante, como pessoa, musicista e professora.
              Sou eternamente grata a Deus por trabalhar com aquilo que amo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
