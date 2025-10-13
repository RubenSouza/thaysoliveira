'use client';

import { useContactForm } from '@/src/hooks/useContactForm';
import Image from 'next/image';

export default function Contact() {
  const { handleSubmit } = useContactForm();

  return (
    <section id='contato' className='content-section dark-bg'>
      <div className='container'>
        <h2>Entre em Contato</h2>
        <p className='section-subtitle'>
          Vamos começar sua jornada musical juntos!
        </p>
        <div className='contato-wrapper'>
          <div className='contato-info'>
            <Image
              src='/assets/logo.webp'
              alt='Logo Thays Oliveira'
              width={140}
              height={60}
              className='contato-logo disable-interaction'
            />
            <h3>Informações</h3>
            <p>
              <i className='fas fa-phone' /> (83) 99102-9054
            </p>
            <p>
              <i className='fas fa-envelope' /> profs.thaysoliveira@gmail.com
            </p>
            <div className='social-icons'>
              <a
                href='https://www.instagram.com/thaysoliveira.a/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram' />
              </a>
              <a
                href='https://www.youtube.com/@ThaysOliveira'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-youtube' />
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=5583991029054'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-whatsapp' />
              </a>
            </div>
          </div>
          <form className='contact-form' onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Seu Nome' required />
            <input
              type='email'
              name='email'
              placeholder='Seu E-mail'
              required
            />
            <textarea
              name='message'
              rows={5}
              placeholder='Sua Mensagem'
              required
            />
            <button type='submit' className='cta-button'>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
