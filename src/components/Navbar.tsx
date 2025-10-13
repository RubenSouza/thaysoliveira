'use client';

import { useHamburgerMenu } from '@/src/hooks/useHamburgerMenu';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#aulas', label: 'Aulas & Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#materiais', label: 'Materiais' },
  { href: '#galeria', label: 'Recitais' },
  { href: '#midia', label: 'Mídia' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const { isOpen, toggle, close, hamburgerRef, navRef, iconClass } =
    useHamburgerMenu();

  return (
    <header>
      <nav>
        <Link href='#inicio' className='logo' onClick={close}>
          <Image
            src='/assets/logo2.png'
            alt='Logo Thays Oliveira'
            width={140}
            height={50}
            className='disable-interaction'
            priority
          />
        </Link>
        <ul id='nav-links' ref={navRef} className={isOpen ? 'nav-active' : ''}>
          <li className='nav-logo-mobile'>
            <Image
              src='/assets/logo3.png'
              alt='Logo Thays Oliveira Mobile'
              width={120}
              height={40}
              className='disable-interaction'
            />
          </li>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger-menu ${isOpen ? 'toggle' : ''}`}
          id='hamburger-menu'
          onClick={toggle}
          ref={hamburgerRef}
          aria-label='Menu'
          aria-expanded={isOpen}
          role='button'
        >
          <i className={iconClass} />
        </div>
      </nav>
    </header>
  );
}
