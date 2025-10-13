'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Vimeo?: any;
  }
}

export default function useVimeoPlayers() {
  useEffect(() => {
    function init() {
      if (typeof window.Vimeo === 'undefined') {
        // Carrega script se necessário
        if (!document.getElementById('vimeo-player-api')) {
          const script = document.createElement('script');
          script.id = 'vimeo-player-api';
          script.src = 'https://player.vimeo.com/api/player.js';
          script.async = true;
          script.onload = setupPlayers;
          document.body.appendChild(script);
        }
      } else {
        setupPlayers();
      }
    }

    function setupPlayers() {
      if (typeof window.Vimeo === 'undefined') return;
      const iframes = document.querySelectorAll<HTMLIFrameElement>(
        "iframe[src*='vimeo']"
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = null;
      iframes.forEach(iframe => {
        const player = new window.Vimeo.Player(iframe);
        player.on('play', () => {
          if (current && current.element !== player.element) {
            current.pause();
          }
          current = player;
        });
      });
    }

    init();
  }, []);
}
