import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Image
        src='/assets/logo3.png'
        alt='Logo Thays Oliveira'
        width={160}
        height={55}
        className='footer-logo disable-interaction'
      />
      <p>
        &copy; 2025 Thays Oliveira - Professora de Música. Todos os direitos
        reservados.
      </p>

      <div className='dev-credit'>
        <span>Desenvolvido por:</span>
        <Link
          href='https://matheusalveswd.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/assets/MWBD/logoM.png'
            alt='Logo do Desenvolvedor'
            width={40}
            height={40}
            className='disable-interaction'
          />
        </Link>
      </div>
    </footer>
  );
}
