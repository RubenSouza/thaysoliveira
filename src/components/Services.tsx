'use client';

import { services } from '@/src/data/services';

export default function Services() {
  return (
    <section id='aulas' className='content-section dark-bg'>
      <div className='container'>
        <h2>Aulas &amp; Serviços</h2>
        <div className='servicos-grid'>
          {services.map(s => (
            <div className='servico-card' key={s.title}>
              <i className={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
