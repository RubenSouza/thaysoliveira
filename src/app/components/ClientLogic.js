"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function ClientLogic() {

  useEffect(() => {
    /* --- Lógica do Botão Voltar ao Topo --- */
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const handleScroll = () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };
    window.addEventListener('scroll', handleScroll);

    /* --- Lógica do Menu Hambúrguer --- */
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('#nav-links li a');
    const hamburgerIcon = hamburger.querySelector('i');

    function toggleHamburgerIcon() {
        const isMenuOpen = navLinks.classList.contains('nav-active');
        if (isMenuOpen) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
    }

    const handleHamburgerClick = () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        toggleHamburgerIcon();
    };
    hamburger.addEventListener('click', handleHamburgerClick);

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
                toggleHamburgerIcon();
            }
        });
    });

    const handleDocumentClick = (event) => {
        const isMenuOpen = navLinks.classList.contains('nav-active');
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            toggleHamburgerIcon();
        }
    };
    document.addEventListener('click', handleDocumentClick);


    /* --- LÓGICA DO CARROSSEL --- */
    function setupCarousel(carouselId, prevBtnId, nextBtnId, itemsPerViewDesktop, itemsPerViewMobile, autoScrollInterval) {
        const carousel = document.getElementById(carouselId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        
        if (!carousel || !prevBtn || !nextBtn) return;

        const carouselItems = Array.from(carousel.children);
        const totalItems = carouselItems.length;
        if (totalItems === 0) return;
        
        carouselItems.forEach(item => {
            carousel.appendChild(item.cloneNode(true));
        });

        let currentIndex = totalItems;
        let itemsPerView = window.innerWidth <= 768 ? itemsPerViewMobile : itemsPerViewDesktop;
        let intervalId;

        function updateCarousel(transition = true) {
            itemsPerView = window.innerWidth <= 768 ? itemsPerViewMobile : itemsPerViewDesktop;
            const itemWidth = 100 / itemsPerView;
            
            carousel.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;

            Array.from(carousel.children).forEach(item => {
                item.style.flex = `0 0 ${itemWidth}%`;
            });
        }

        function showNext() {
            if (currentIndex >= totalItems * 2 - itemsPerView) return;
            currentIndex++;
            updateCarousel();
            
            if (currentIndex >= totalItems * 2 - itemsPerView) {
                setTimeout(() => {
                    currentIndex = totalItems - itemsPerView;
                    updateCarousel(false);
                }, 500);
            }
        }

        function showPrev() {
            if (currentIndex <= 0) return;
            currentIndex--;
            updateCarousel();

            if (currentIndex < 1) {
                 setTimeout(() => {
                    currentIndex = totalItems -1;
                    updateCarousel(false);
                }, 500);
            }
        }

        function startAutoScroll() {
            if (autoScrollInterval > 0) {
                stopAutoScroll();
                intervalId = setInterval(showNext, autoScrollInterval);
            }
        }
        
        function stopAutoScroll() {
            clearInterval(intervalId);
        }

        nextBtn.addEventListener('click', () => {
            showNext();
            stopAutoScroll();
            startAutoScroll();
        });

        prevBtn.addEventListener('click', () => {
            showPrev();
            stopAutoScroll();
            startAutoScroll();
        });
        
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);

        const handleResize = () => {
            currentIndex = totalItems;
            updateCarousel(false);
        };

        window.addEventListener('resize', handleResize);

        updateCarousel(false);
        startAutoScroll();

        // Retorna uma função de cleanup para o carrossel
        return () => window.removeEventListener('resize', handleResize);
    }

    const cleanupCarousel1 = setupCarousel('depoimentos-carousel', 'depoimentos-prev', 'depoimentos-next', 2, 1, 5000); 
    const cleanupCarousel2 = setupCarousel('materiais-carousel', 'materiais-prev', 'materiais-next', 4, 1, 4000);


    /* --- LÓGICA DO FORMULÁRIO DE CONTATO --- */
    const contactForm = document.getElementById('contact-form-id');
    const handleFormSubmit = function(event) {
        event.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        const phoneNumber = '5583991029054'; 
        let whatsappMessage = `Olá! Tenho interesse em suas aulas.\n\n`;
        whatsappMessage += `*Nome:* ${name}\n`;
        whatsappMessage += `*E-mail:* ${email}\n\n`;
        whatsappMessage += `*Mensagem:*\n${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }


    /* --- LÓGICA PARA IMPEDIR INTERAÇÃO COM IMAGENS --- */
    const handleContextMenu = (event) => {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    };
    document.addEventListener('contextmenu', handleContextMenu);


    // Função de Cleanup para remover todos os event listeners quando o componente desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger.removeEventListener('click', handleHamburgerClick);
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('contextmenu', handleContextMenu);
      if (contactForm) {
          contactForm.removeEventListener('submit', handleFormSubmit);
      }
      if (typeof cleanupCarousel1 === 'function') cleanupCarousel1();
      if (typeof cleanupCarousel2 === 'function') cleanupCarousel2();
    };
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

  const initializeParticles = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
          "color": {"value": "#E5A11B"},
          "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}, "polygon": {"nb_sides": 5}},
          "opacity": {"value": 0.5, "random": false, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
          "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
          "line_linked": {"enable": true, "distance": 150, "color": "#E5A11B", "opacity": 0.4, "width": 1},
          "move": {"enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}}
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
          "modes": {"grab": {"distance": 140, "line_linked": {"opacity": 1}}, "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3}, "repulse": {"distance": 200, "duration": 0.4}, "push": {"particles_nb": 4}, "remove": {"particles_nb": 2}}
        },
        "retina_detect": true
      });
    }
  };
  
  const initializeVimeoPlayers = () => {
    if (typeof window.Vimeo !== 'undefined') {
        const iframes = document.querySelectorAll('.video-container iframe');
        let currentlyPlaying = null;

        iframes.forEach(iframe => {
            if (iframe.src.includes('vimeo')) {
                const player = new window.Vimeo.Player(iframe);
                player.on('play', () => {
                    if (currentlyPlaying && currentlyPlaying.element !== player.element) {
                        currentlyPlaying.pause();
                    }
                    currentlyPlaying = player;
                });
            }
        });
    }
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="lazyOnload"
        onLoad={initializeParticles}
      />
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload"
        onLoad={initializeVimeoPlayers}
      />
    </>
  );
}