'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerViewDesktop);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setItemsPerView(isMobile ? itemsPerViewMobile : itemsPerViewDesktop);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerViewDesktop, itemsPerViewMobile]);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (autoScrollInterval <= 0) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(next, autoScrollInterval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoScrollInterval, maxIndex]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoScrollInterval > 0) {
      autoPlayRef.current = setInterval(next, autoScrollInterval);
    }
  };

  const itemWidth = 100 / itemsPerView;
  const translateX = -(currentIndex * itemWidth);

  return (
    <div
      className='carousel-wrapper'
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='carousel'
        style={{
          display: 'flex',
          transform: `translateX(${translateX}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {items.map((item, idx) => (
          <div
            className='carousel-item'
            key={idx}
            style={{
              flex: `0 0 ${itemWidth}%`,
            }}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      <button
        className='carousel-btn prev'
        onClick={prev}
        aria-label='Anterior'
        type='button'
      >
        <i className='fas fa-chevron-left mt-2' />
      </button>
      <button
        className='carousel-btn next'
        onClick={next}
        aria-label='Próximo'
        type='button'
      >
        <i className='fas fa-chevron-right mt-2' />
      </button>
    </div>
  );
}
