'use client';

import ParticlesBackground from '@/src/components/ParticlesBackground';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Testimonials from '@/src/components/Testimonials';
import Materials from '@/src/components/Materials';
import Recitals from '@/src/components/Recitals';
import Media from '@/src/components/Media';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import BackToTopButton from '@/src/components/BackToTopButton';
import useDisableImageContextMenu from '@/src/hooks/useDisableImageContextMenu';
import useVimeoPlayers from '@/src/hooks/useVimeoPlayers';

export default function Page() {
  useDisableImageContextMenu();
  useVimeoPlayers();

  return (
    <>
      <ParticlesBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Materials />
        <Recitals />
        <Media />
        <Contact />
      </main>

      <Footer />

      <BackToTopButton />
    </>
  );
}
