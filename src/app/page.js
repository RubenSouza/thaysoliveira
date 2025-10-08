import ClientLogic from './components/ClientLogic';

export default function Home() {
  return (
    <>
      <div id="particles-js"></div>

      <header>
        <nav>
          <a href="#inicio" className="logo">
            <img src="/assets/logo2.png" alt="Logo Thays Oliveira" className="disable-interaction" />
          </a>
          <ul id="nav-links">
            <li className="nav-logo-mobile">
              <img src="/assets/logo3.png" alt="Logo Thays Oliveira Mobile" className="disable-interaction" />
            </li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#aulas">Aulas & Serviços</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#materiais">Materiais</a></li>
            <li><a href="#galeria">Recitais</a></li>
            <li><a href="#midia">Mídia</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <div className="hamburger-menu" id="hamburger-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Thays Oliveira</h1>
              <p>Musicista, Professora de Música & Cantora</p>
              <a href="#contato" className="cta-button">Entre em Contato</a>
            </div>
            <div className="hero-image">
              <img src="/assets/thaysperfil.webp" alt="Thays Oliveira com seu violão" className="disable-interaction" />
            </div>
          </div>
        </section>

        <section id="sobre" className="content-section">
          <div className="container">
            <h2>Sobre Mim</h2>
            <div className="sobre-flex">
              <div className="sobre-img">
                <img src="/assets/thayskid.png" alt="Foto de Thays Oliveira criança" className="disable-interaction" />
              </div>
              <div className="sobre-text">
                <h3>A vida é uma música, e a nossa história é a sua letra.</h3>
                <p>Sou licencianda em Música e apaixonada pela arte de ensinar. Toco desde os 6 anos de idade e, hoje, tenho a oportunidade de lecionar, ajudando outras pessoas a realizarem o sonho de tocar um instrumento musical. Sou professora há 5 anos, com experiência em escola de música e, atualmente, atuo de forma particular, em domicílio. Além das aulas, atuo como cantora no cenário gospel da minha cidade e região, com trabalhos autorais disponíveis em CD e em um EP nas principais plataformas digitais. Estou sempre em busca de evolução constante, como pessoa, musicista e professora. Sou eternamente grata a Deus por trabalhar com aquilo que amo!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="aulas" className="content-section dark-bg">
          <div className="container">
            <h2>Aulas & Serviços</h2>
            <div className="servicos-grid">
              <div className="servico-card">
                <i className="fas fa-calendar-alt"></i>
                <h3>Aulas Semanais</h3>
                <p>Aulas estruturadas para um desenvolvimento musical contínuo e consistente.</p>
              </div>
              <div className="servico-card">
                <i className="fas fa-tasks"></i>
                <h3>Cronograma Personalizado</h3>
                <p>O plano de aulas é moldado de acordo com seus objetivos e ritmo de aprendizado.</p>
              </div>
              <div className="servico-card">
                <i className="fas fa-music"></i>
                <h3>Repertório Musical Sob Medida</h3>
                <p>Aprenda a tocar as músicas que você ama, do clássico ao popular.</p>
              </div>
              <div className="servico-card">
                <i className="fas fa-microphone-alt"></i>
                <h3>Eventos Musicais</h3>
                <p>Preparação para apresentações, recitais e eventos especiais para alunos.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="content-section">
          <div className="container">
            <h2>O que dizem meus clientes</h2>
            <div className="carousel-wrapper">
              <div className="carousel" id="depoimentos-carousel">
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/AlineThaisa.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Você fez toda a diferença Thays, a gente só têm a agradecer!"</blockquote>
                    <cite>- Aline Thaisa</cite>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/AnaLucia.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Lindo relato, eu como mãe de uma de suas alunas, tenho visto de perto realmente você fez a escolha certa, pois você exala música e transmite isso facilmente para seus alunos."</blockquote>
                    <cite>- Ana Lúcia</cite>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/DanyFreitas.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Só tenho a agradecer a essa profissional @thaysoliveira.a gratidão pelo seu carinho e dedicação. Meu príncipe surpreendeu @jmiguelsbento"</blockquote>
                    <cite>- Dany Freitas</cite>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/HellenVieira.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Meu Deus, muito obrigada(mais uma vez e sempre). Obrigada @thaysoliveira.a por tanto empenho, carinho e dedicação."</blockquote>
                    <cite>- Hellen Vieira</cite>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/MagnaBarbosa.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Mãe ama demais. Muito orgulhosa dessa trajetória dela com essa tia maravilhosa"</blockquote>
                    <cite>- Magna Barbosa</cite>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="depoimento-card">
                    <img src="/assets/alunos/MariaAlves.webp" alt="Foto de Aluno(a)" className="disable-interaction" />
                    <blockquote>"Não consigo descrever em palavras o que senti naquele dia! Quanta alegria e orgulho sinto em ser mãe da minha pequena Marina. Obrigado por extrair o melhor dela!"</blockquote>
                    <cite>- Maria Alves</cite>
                  </div>
                </div>
              </div>
              <button className="carousel-btn prev" id="depoimentos-prev"><i className="fas fa-chevron-left"></i></button>
              <button className="carousel-btn next" id="depoimentos-next"><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </section>

        <section id="materiais" className="content-section dark-bg">
          <div className="container">
            <h2>Materiais Didáticos</h2>
            <p className="section-subtitle">Recursos criativos para um aprendizado divertido e eficaz.</p>
            <div className="carousel-wrapper">
              <div className="carousel" id="materiais-carousel">
                <div className="carousel-item">
                  <img src="/assets/materiais/material1.webp" alt="Material didático 1" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material2.webp" alt="Material didático 2" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material3.webp" alt="Material didático 3" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material4.webp" alt="Material didático 4" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material5.webp" alt="Material didático 5" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material6.webp" alt="Material didático 6" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material7.webp" alt="Material didático 7" className="material-img disable-interaction" />
                </div>
                <div className="carousel-item">
                  <img src="/assets/materiais/material8.webp" alt="Material didático 8" className="material-img disable-interaction" />
                </div>
              </div>
              <button className="carousel-btn prev" id="materiais-prev"><i className="fas fa-chevron-left"></i></button>
              <button className="carousel-btn next" id="materiais-next"><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </section>

        <section id="galeria" className="content-section dark-bg">
            <div className="container">
                <h2>Recitais Anuais</h2>
                <p className="section-subtitle">Momentos especiais das apresentações dos alunos.</p>
                
                <h3 className="recital-ano">Recital 2024</h3>
                <div className="recital-grid">
                    <div className="recital-video-item">
                        <div className="video-container">
                            <iframe src="https://player.vimeo.com/video/1120497796?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Maria Eduarda - Um xodó - Thays Oliveira"></iframe>
                        </div>
                        <div className="video-info"><h4>Arthur Oliveira</h4><p>Eu juro / Até que durou</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120497804?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Maria Eduarda</h4><p>Um Xodó</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499466?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Maria Julia</h4><p>Anunciação</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499442?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Heitor Vitorio</h4><p>Me Namora</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499476?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Marina Lima</h4><p>Coisas que eu sei</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499432?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Ana Clara</h4><p>Do lado de cá</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Lara Costa</h4><p>Baby</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499425?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Alice Barbosa</h4><p>Trem bala / Foi Deus quem fez você</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499501?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Ravi Paulino</h4><p>Era uma vez</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499490?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Raissa e Lara</h4><p>Dia especial</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1120499523?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Alessandra - Grupo</h4><p>Meu Erro</p></div>
                    </div>
                </div>

                <h3 className="recital-ano">Recital 2023</h3>
                <div className="recital-grid">
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034471?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Lara Costa</h4><p>Fico assim sem você / Peça felicidade</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034406?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Alice Monteiro</h4><p>O sol</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034360?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Marina Lima</h4><p>Trevo / Anunciação</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034481?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Maria Eduarda</h4><p>Fico assim sem você / Peça felicidade</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034443?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Arthur Oliveira</h4><p>Naquela mesa</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034491?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Maria Júlia</h4><p>Cai cai balão / Brilha estrelinha</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034383?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Abraão Barbosa</h4><p>Pequena flor / Meu abrigo</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034435?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Ana Clara</h4><p>Snap</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034406?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>Alice Barbosa</h4><p>Asa branca / Era uma vez</p></div>
                    </div>
                    <div className="recital-video-item">
                        <div className="video-container"><iframe src="https://player.vimeo.com/video/1121034454?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <div className="video-info"><h4>João Miguel</h4><p>Jura juradinho</p></div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="midia" className="content-section">
            <div className="container">
                <h2>Mídia</h2>
                <p className="section-subtitle">Assista a algumas apresentações.</p>
                <div className="midia-grid">
                    <div className="video-container">
                        <iframe src="https://player.vimeo.com/video/1120496193?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="J. S. Bach MINUETO EM SOL G (BWV Anh. 114)"></iframe>
                    </div>
                    <div className="video-container">
                        <iframe src="https://player.vimeo.com/video/1120496278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&loop=1" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Mais perto quero estar (Violão - Fingestyle) - Thays Oliveira (720p, h264, youtube)"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section id="contato" className="content-section dark-bg">
            <div className="container">
                <h2>Entre em Contato</h2>
                <p className="section-subtitle">Vamos começar sua jornada musical juntos!</p>
                <div className="contato-wrapper">
                    <div className="contato-info">
                        <img src="/assets/logo.webp" alt="Logo Thays Oliveira" className="contato-logo disable-interaction" />
                        <h3>Informações</h3>
                        <p><i className="fas fa-phone"></i> (83) 99102-9054</p>
                        <p><i className="fas fa-envelope"></i> profs.thaysoliveira@gmail.com</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/thaysoliveira.a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@ThaysOliveira" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=5583991029054" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" id="contact-form-id">
                        <input type="text" name="name" placeholder="Seu Nome" required />
                        <input type="email" name="email" placeholder="Seu E-mail" required />
                        <textarea name="message" rows="5" placeholder="Sua Mensagem" required></textarea>
                        <button type="submit" className="cta-button">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
      </main>

      <footer>
        <img src="/assets/logo3.png" alt="Logo Thays Oliveira" className="footer-logo disable-interaction" />
        <p>&copy; 2025 Thays Oliveira - Professora de Música. Todos os direitos reservados.</p>
    
        <div className="dev-credit">
            <span>Desenvolvido por:</span>
            <a href="https://matheusalveswd.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src="/assets/MWBD/logoM.png" alt="Logo do Desenvolvedor" className="disable-interaction" />
            </a>
        </div>
      </footer>

      <a href="#inicio" id="back-to-top-btn" title="Voltar ao topo"><i className="fas fa-arrow-up"></i></a>

      <ClientLogic />
    </>
  );
}