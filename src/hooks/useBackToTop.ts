'use client';

import { useEffect, useState } from 'react';

export function useBackToTop(threshold: number = 300) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return visible;
}
