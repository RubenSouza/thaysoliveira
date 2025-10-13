'use client';

import useParticles from '@/src/hooks/useParticles';

export default function ParticlesBackground() {
  useParticles();
  return <div id='particles-js' aria-hidden='true' />;
}
