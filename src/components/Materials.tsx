'use client';

import { materials } from '@/src/data/materials';
import Carousel from '@/src/components/Carousel';

export default function Materials() {
  return (
    <section id='materiais' className='content-section dark-bg'>
      <div className='container'>
        <h2>Materiais Didáticos</h2>
        <p className='section-subtitle'>
          Recursos criativos para um aprendizado divertido e eficaz.
        </p>
        <Carousel
          items={materials}
          itemsPerViewDesktop={4}
          itemsPerViewMobile={1}
          autoScrollInterval={4000}
          ariaLabel='Carrossel de materiais didáticos'
          renderItem={m => (
            <img
              src={m.img}
              alt={m.alt}
              className='material-img disable-interaction'
            />
          )}
        />
      </div>
    </section>
  );
}
