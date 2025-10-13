'use client';

import { useCarousel } from '@/src/hooks/useCarousel';
import { ReactNode } from 'react';

interface CarouselProps<T> {
  items: T[];
  itemsPerViewDesktop: number;
  itemsPerViewMobile: number;
  autoScrollInterval?: number;
  renderItem: (item: T, index: number) => ReactNode;
  ariaLabel?: string;
}

export default function Carousel<T>({
  items,
  itemsPerViewDesktop,
  itemsPerViewMobile,
  autoScrollInterval = 0,
  renderItem,
  ariaLabel,
}: CarouselProps<T>) {
  const { trackRef, next, prev, handleMouseEnter, handleMouseLeave, style } =
    useCarousel({
      itemsLength: items.length,
      itemsPerViewDesktop,
      itemsPerViewMobile,
      autoScrollInterval,
    });

  // Para efeito infinito duplicamos arrays (front + back)
  const doubledItems = [...items, ...items];

  return (
    <div className='carousel-wrapper' aria-label={ariaLabel}>
      <div
        className='carousel'
        ref={trackRef}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {doubledItems.map((item, idx) => (
          <div className='carousel-item' key={idx}>
            {renderItem(item, idx % items.length)}
          </div>
        ))}
      </div>
      <button
        className='carousel-btn prev'
        onClick={prev}
        aria-label='Anterior'
        type='button'
      >
        <i className='fas fa-chevron-left' />
      </button>
      <button
        className='carousel-btn next'
        onClick={next}
        aria-label='Próximo'
        type='button'
      >
        <i className='fas fa-chevron-right' />
      </button>
    </div>
  );
}
