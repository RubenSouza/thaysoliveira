'use client';

import { FormEvent } from 'react';

export function useContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const phoneNumber = '5583991029054';
    let whatsappMessage = `Olá! Tenho interesse em suas aulas.\n\n`;
    whatsappMessage += `*Nome:* ${name}\n`;
    whatsappMessage += `*E-mail:* ${email}\n\n`;
    whatsappMessage += `*Mensagem:*\n${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
    form.reset();
  };

  return { handleSubmit };
}
