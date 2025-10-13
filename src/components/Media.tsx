export default function Media() {
  const videos = [
    {
      src: 'https://player.vimeo.com/video/1120496193?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&loop=1',
      title: 'J. S. Bach MINUETO EM SOL G (BWV Anh. 114)',
    },
    {
      src: 'https://player.vimeo.com/video/1120496278?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&loop=1',
      title: 'Mais perto quero estar (Violão - Fingestyle) - Thays Oliveira',
    },
  ];
  return (
    <section id='midia' className='content-section'>
      <div className='container'>
        <h2>Mídia</h2>
        <p className='section-subtitle'>Assista a algumas apresentações.</p>
        <div className='midia-grid'>
          {videos.map(v => (
            <div className='video-container' key={v.src}>
              <iframe
                src={v.src}
                title={v.title}
                frameBorder={0}
                allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
