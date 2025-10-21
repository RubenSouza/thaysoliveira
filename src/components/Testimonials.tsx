'use client';

import { testimonials } from '@/src/data/testimonials';
import Carousel from '@/src/components/Carousel';

export default function Testimonials() {
  return (
    <section id='depoimentos' className='content-section'>
      <div className='container'>
        <h2>O que dizem meus clientes</h2>
        <Carousel
          items={testimonials}
          itemsPerViewDesktop={2}
          itemsPerViewMobile={1}
          autoScrollInterval={5000}
          ariaLabel='Carrossel de depoimentos'
          renderItem={t => (
            <div className='depoimento-card'>
              <img
                src={t.img}
                alt={`Foto de ${t.author}`}
                className='disable-interaction'
              />
              <blockquote>{t.quote}</blockquote>
              <cite>- {t.author}</cite>
            </div>
          )}
        />
      </div>
    </section>
  );
}
