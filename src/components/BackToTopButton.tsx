'use client';

import { useBackToTop } from '@/src/hooks/useBackToTop';

export default function BackToTopButton() {
  const visible = useBackToTop(300);

  return (
    <a
      href='#inicio'
      id='back-to-top-btn'
      title='Voltar ao topo'
      className={visible ? 'show' : ''}
      aria-label='Voltar ao topo'
    >
      <i className='fas fa-arrow-up' />
    </a>
  );
}
