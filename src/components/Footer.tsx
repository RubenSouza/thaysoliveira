'use client';

import Image from 'next/image';

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
    </footer>
  );
}
