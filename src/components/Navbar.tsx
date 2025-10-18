'use client';

import { useState } from 'react';
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
  { href: '/recital', label: 'Ingressos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav>
        <Link href='#inicio' className='logo' onClick={closeMenu}>
          <Image
            src='/assets/logo2.png'
            alt='Logo Thays Oliveira'
            width={140}
            height={50}
            className='disable-interaction'
            priority
          />
        </Link>

        <ul className={isOpen ? 'nav-active' : ''}>
          <li className='nav-logo-mobile'>
            <Image
              src='/assets/logo3.png'
              alt='Logo Thays Oliveira Mobile'
              width={120}
              height={40}
              className='disable-interaction'
            />
          </li>
          {navLinks.map(link => (
            <li key={link.href} className='text-sm xl:text-base'>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger-menu ${isOpen ? 'toggle' : ''}`}
          onClick={toggleMenu}
          role='button'
          aria-label='Menu'
          aria-expanded={isOpen}
        >
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </div>
      </nav>
    </header>
  );
}
