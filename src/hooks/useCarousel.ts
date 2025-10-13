'use client';

import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

interface UseCarouselArgs {
  itemsLength: number;
  itemsPerViewDesktop: number;
  itemsPerViewMobile: number;
  autoScrollInterval?: number;
}

export function useCarousel({
  itemsLength,
  itemsPerViewDesktop,
  itemsPerViewMobile,
  autoScrollInterval = 0,
}: UseCarouselArgs) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(itemsLength); // começa na primeira cópia "real"
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const recalcItemsPerView = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setItemsPerView(mobile ? itemsPerViewMobile : itemsPerViewDesktop);
  }, [itemsPerViewDesktop, itemsPerViewMobile]);

  // Recalcula ao montar e no resize
  useEffect(() => {
    recalcItemsPerView();
    window.addEventListener('resize', recalcItemsPerView);
    return () => window.removeEventListener('resize', recalcItemsPerView);
  }, [recalcItemsPerView]);

  const next = useCallback(() => {
    setIndex(prev => {
      if (prev >= itemsLength * 2 - itemsPerView) return prev;
      return prev + 1;
    });
  }, [itemsLength, itemsPerView]);

  const prev = useCallback(() => {
    setIndex(prev => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }, []);

  // Auto scroll
  useEffect(() => {
    if (autoScrollInterval > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      intervalRef.current && clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        next();
      }, autoScrollInterval);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [autoScrollInterval, next]);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    if (autoScrollInterval > 0) {
      intervalRef.current = setInterval(next, autoScrollInterval);
    }
  };

  // Reparar salto infinito (sem flicker) usando onTransitionEnd
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      // Ao alcançar "quase fim":
      if (index >= itemsLength * 2 - itemsPerView) {
        setIsTransitioning(false);
        setIndex(itemsLength - itemsPerView);
      }
      // Ao alcançar início:
      if (index <= 0) {
        setIsTransitioning(false);
        setIndex(itemsLength);
      }
    };

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [index, itemsLength, itemsPerView]);

  // Quando index muda, ativa transition (exceto resets internos)
  useEffect(() => {
    setIsTransitioning(true);
  }, [index]);

  const itemWidthPercent = 100 / itemsPerView;
  const translatePercent = -(index * itemWidthPercent);

  const style: CSSProperties = {
    display: 'flex',
    transform: `translateX(${translatePercent}%)`,
    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
  };

  // Ajusta flex-basis de cada filho depois do render
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    Array.from(track.children).forEach(el => {
      (el as HTMLElement).style.flex = `0 0 ${itemWidthPercent}%`;
    });
  }, [itemWidthPercent, itemsPerView, itemsLength]);

  return {
    trackRef,
    next,
    prev,
    handleMouseEnter,
    handleMouseLeave,
    style,
  };
}
