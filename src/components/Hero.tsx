import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='inicio' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Thays Oliveira</h1>
          <p>Musicista, Professora de Música &amp; Cantora</p>
          <Link href='#contato' className='cta-button'>
            Entre em Contato
          </Link>
        </div>
        <div className='hero-image'>
          <Image
            src='/assets/thaysperfil.webp'
            alt='Thays Oliveira com seu violão'
            width={480}
            height={480}
            className='disable-interaction'
            priority
          />
        </div>
      </div>
    </section>
  );
}
