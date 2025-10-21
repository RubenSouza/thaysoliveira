'use client';

import {
  recitals2024,
  recitals2023,
  type RecitalVideo,
} from '@/src/data/recitals';
import StudentVideo from './StudentVideo';
import { motion } from 'framer-motion';

interface RecitalGroupProps {
  year: string;
  items: RecitalVideo[];
}

function RecitalGroup({ year, items }: RecitalGroupProps) {
  const desktopList = items.map((student, i) => {
    return (
      <div
        className='w-full md:w-auto flex flex-col md:flex-row  justify-center items-center space-y-6 
      md:space-y-0 md:justify-start py-5 md:py-10'
        key={i}
      >
        {student?.side === 'left' ? (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='w-full max-h-[600px] md:w-auto flex flex-col md:flex-row justify-center items-center
          gap-6'
          >
            <StudentVideo videoId={student.videoId} />
            <div>
              <h3 className='text-xl md:text-3xl font-semibold text-[--primary-gold]'>
                {student.performer}
              </h3>
              <p className='text-[11px] font-sans text-neutral-400'>
                {student.title}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='w-full max-h-[600px] md:w-auto flex flex-col md:flex-row justify-center items-center
          gap-6'
          >
            <div>
              <h3 className='text-xl md:text-3xl font-semibold text-[--primary-gold]'>
                {student.performer}
              </h3>
              <p className='text-[11px] font-sans text-neutral-400'>
                {student.title}
              </p>
            </div>
            <StudentVideo videoId={student.videoId} />
          </motion.div>
        )}
      </div>
    );
  });

  const mobileList = items.map((v, i) => (
    <div
      className='w-full md:w-auto flex flex-col md:flex-row justify-center items-center 
      md:gap-y-0 md:gap-x-6 md:justify-start'
      key={`${v.performer}-mobile-${i}`}
    >
      <StudentVideo videoId={v.videoId} className='max-h-[480px] max-w-full' />
      <div className='my-5'>
        <h3 className='text-xl md:text-3xl font-semibold text-[--primary-gold]]'>
          {v.performer}
        </h3>
        <p className='text-[11px] font-sans text-neutral-400'>{v.title}</p>
        {(v.age || v.experience) && (
          <p className='text-[10px] font-sans text-neutral-500 '>
            {v.age && <span>{v.age}</span>}
            {v.age && v.experience && <span> • </span>}
            {v.experience && <span>{v.experience}</span>}
          </p>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <h3 className='recital-ano'>Recital {year}</h3>

      <div className='max-w-full md:flex flex-wrap justify-between py-10 hidden'>
        {desktopList}
      </div>

      {/* Mobile */}
      <div className='max-w-full flex flex-wrap justify-between pt-5 md:hidden'>
        {mobileList}
      </div>
    </>
  );
}

export default function Recitals() {
  return (
    <section id='galeria' className='content-section dark-bg'>
      <div className='container'>
        <h2>Recitais Anuais</h2>
        <p className='section-subtitle'>
          Momentos especiais das apresentações dos alunos.
        </p>

        <RecitalGroup year='2024' items={recitals2024 as RecitalVideo[]} />
        <RecitalGroup year='2023' items={recitals2023 as RecitalVideo[]} />
      </div>
    </section>
  );
}
