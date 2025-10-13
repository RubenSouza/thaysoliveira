'use client';

import { useEffect, useRef, useState } from 'react';

export function useHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);

  const toggle = () => setIsOpen(o => !o);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isOpen) return;
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const iconClass = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

  return { isOpen, toggle, close, hamburgerRef, navRef, iconClass };
}
