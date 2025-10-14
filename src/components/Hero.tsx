import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='inicio' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Thays Oliveira</h1>
          <p>Professora de Música</p>
          <Link href='#contato' className='cta-button'>
            Entre em Contato
          </Link>
        </div>
        <div className='overflow-hidden rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] shadow-lg'>
          <Image
            src='/assets/hero-photo.jpg'
            alt='Thays Oliveira com seu violão'
            width={500}
            height={500}
            className='disable-interaction w-full h-full object-cover object-left-bottom scale-125'
            priority
          />
        </div>
      </div>
    </section>
  );
}
