import ThaysVideo from './ThaysVideo';

export default function Media() {
  return (
    <section id='midia' className='content-section'>
      <div className='container'>
        <h2>Mídia</h2>
        <p className='section-subtitle'>Assista a algumas apresentações.</p>
        <div className='midia-grid'>
          <ThaysVideo videoId='u-WY05TNY60' />
          <ThaysVideo videoId='he4gnkr654A' />
        </div>
      </div>
    </section>
  );
}
