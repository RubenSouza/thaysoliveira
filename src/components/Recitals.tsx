'use client';

import {
  recitals2024,
  recitals2023,
  type RecitalVideo,
} from '@/src/data/recitals';
import StudentVideo from './StudentVideo';

interface RecitalGroupProps {
  year: string;
  items: RecitalVideo[];
}

function RecitalGroup({ year, items }: RecitalGroupProps) {
  return (
    <>
      <h3 className='recital-ano'>Recital {year}</h3>
      <div className='recital-grid'>
        {items.map((v, i) => (
          <div className='recital-video-item' key={`${v.performer}-${i}`}>
            <div>
              <StudentVideo
                videoId={v.videoId}
                className='w-full h-full max-w-full'
              />
            </div>
            <div className='video-info'>
              <h4>{v.performer}</h4>
              <p>{v.title}</p>
              {(v.age || v.experience) && (
                <p className='extra-info text-[10px] text-neutral-400 mt-1'>
                  {v.age && <span>{v.age}</span>}
                  {v.age && v.experience && <span> • </span>}
                  {v.experience && <span>{v.experience}</span>}
                </p>
              )}
            </div>
          </div>
        ))}
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

        <RecitalGroup year='2024' items={recitals2024} />
        <RecitalGroup year='2023' items={recitals2023} />
      </div>
    </section>
  );
}
