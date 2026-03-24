"use client";

import { useState, useRef, useEffect } from "react";
import { sendEmailAction } from "./actions";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const itemRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (itemRefs.current[currentItem]) {
      itemRefs.current[currentItem]?.scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentItem]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    const result = await sendEmailAction(formData);
    
    if (result.error) {
      setSubmitStatus("error");
    } else {
      setSubmitStatus("success");
      e.currentTarget.reset();
    }
    
    setIsSubmitting(false);
  }

  const techItems = [
    "/assets/javascript.jpg",
    "/assets/html.jpg",
    "/assets/css.jpg",
    "/assets/react js.webp",
    "/assets/nodejs.webp",
    "/assets/mysql.jpg",
    "/assets/figma.webp",
    "/assets/git.jpg",
    "/assets/github.jpg"
  ];

  const moveCarousel = (direction: number) => {
    let newIndex = currentItem + direction;
    if (newIndex >= techItems.length) newIndex = 0;
    if (newIndex < 0) newIndex = techItems.length - 1;
    setCurrentItem(newIndex);
  };

  return (
    <>
      <header>
        <nav id="container-home">
          <div className="box-logo">
            <span className="letter-D">D</span>
            <span className="letter-M">M</span>
            <span id="word-DEVMAROTO">DEV MAROTO</span>
          </div>
          <ul id="nav-main">
            <li className="home"><a href="#container-home">Home</a></li>
            <li className="sobre"><a href="#container-about">Sobre</a></li>
            <li className="projetos"><a href="#container-project">Projetos</a></li>
            <li className="contato"><a href="#container-contact">Contato</a></li>
          </ul>
          <div className="checkbox-container">
            <div className="checkbox-wrapper">
                <input 
                  type="checkbox" 
                  id="toggle" 
                  checked={menuOpen} 
                  onChange={(e) => setMenuOpen(e.target.checked)} 
                />
                <label className="checkbox" htmlFor="toggle">
                    <div className="trace"></div>
                    <div className="trace"></div>
                    <div className="trace"></div>
                </label>
                <div className="menu-hamburguer"></div>
                <div className="menu-items-hamburguer" style={menuOpen ? { opacity: 1, visibility: "visible" } : {}}>
                  <ul className="ul-menu-hamburguer">
                      <li className="home-menu-hamburguer"><a href="#container-home" onClick={() => setMenuOpen(false)}>Home</a></li>
                      <li className="sobre-menu-hamburguer"><a href="#container-about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
                      <li className="projetos-menu-hamburguer"><a href="#container-project" onClick={() => setMenuOpen(false)}>Projetos</a></li>
                      <li className="contato-menu-hamburguer"><a href="#container-contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
                  </ul>
                </div>   
            </div>
        </div>
        </nav>
      </header>

      <main>
        <div className="box-main">
          <h1 id="front-end-developer">FRONT END DEVELOPER</h1>
          <p className="description-main">
            Olá, eu sou o <strong>Pedro</strong> vulgo <strong>Dev Maroto</strong> sou desenvolvedor front end e tenho experiência web sites
          </p>
        </div>
        <div className="box-img">
          <img 
            className="img-main" 
            src="/assets/picart-removebg-preview.png" 
            alt="Uma imagem do proprietário do portfólio usando um boné camisa com bolsinho do lado esquerdo, calça begé e tênis branco, ele está fazendo uma sarrada no ar está sorrindo" 
          />
        </div>
      </main>

      <section id="container-about">
        <div className="box-about-photo">
          <img 
            className="img-about" 
            src="/assets/photoAbout.png" 
            alt="Uma imagem do proprietário usando um boné, camisa com bolsinho do lado esquerdo e está olhando para o lado esquerdo" 
          />
        </div>
        <div className="box-description">
          <h2 id="sobre">Sobre</h2>
          <p>
            Avançando sempre em busca de aprender novas tecnologias incluindo desenvolvimento pessoal 
            para alcançar oportunidades de trabalho na qual estou estudando.
          </p>
          <p>
            Formado em Análise e Desenvolvimento de Sistemas, 
            estou cursando a Pós em Engenharia de Software com Ênfase em Qualidade e Teste de Software, 
            continuo estudando na Rocketseat (FullStack) e acredito que esse seja o melhor caminho que 
            estou trilhando para uma futura carreira profissional com bagagem teórica (acadêmica) e 
            prática do curso da Rocketseat.
          </p>
        </div>
      </section>
      
      <section id="container-project">
        <div className="box-h3">
          <h3 id="projetos">Projetos</h3>
          <p>Projetos que realizei</p>
        </div>

        <div className="project-wrapper">
          <div className="box-project-video">
            <iframe 
              width="340" 
              height="315" 
              src="https://github.com/user-attachments/assets/1ce6a022-609b-4cc5-8a17-f40db571df48" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <div className="text-wrapper">
              <p className="title-project">Rocket movies</p>
              <p className="description-title">
                Uma Aplicação capaz de cadastrar e avaliar seus filmes favoritos.
                Podendo fazer o cadastro e logar, o usuário poderá cadastrar
                o filme e poderá avaliar com um score de 0 a 5 e criar um resumo.
              </p>
              <div className="container-button">
                <a href="https://rocketappmovies.netlify.app" target="_blank" rel="noreferrer" id="button-play">
                  <i className="ph-bold ph-play"></i>
                </a>
                <a href="https://github.com/DevMaroto/Desafio-Rocket-Movies-Front?tab=readme-ov-file" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="box-project-video">
            <iframe 
              width="340" 
              height="215" 
              src="https://github.com/DevMaroto/Desafio-stage-6-Git-Fav-Explorer-Turma-11/assets/88672028/4f3116ca-87f5-4382-8ef3-dd2412bd0c8b" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <div className="text-wrapper">
              <p className="title-project">Git Fav</p>
              <p className="description-title">
                Uma Aplicação que você pode favoritar os usuários em uma lista que você segue.
              </p>
              <div className="container-button">
                <a href="https://devmaroto.github.io/Desafio-stage-6-Git-Fav-Explorer-Turma-11/" target="_blank" rel="noreferrer" id="button-play">
                  <i className="ph-bold ph-play"></i>
                </a>
                <a href="https://github.com/DevMaroto/Desafio-stage-6-Git-Fav-Explorer-Turma-11" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="box-project-video">
            <iframe 
              width="340" 
              height="315" 
              src="https://github.com/DevMaroto/Desafio-Focus-Timer-V2.0-ao-V3.0/assets/88672028/5cd7cc83-0136-4d20-9008-5b77f16da5c5" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <div className="text-wrapper">
              <p className="title-project">Focus Timer</p>
              <p className="description-title">
                Um temporizador criado com intuito de utilizar a tecnica pomodoro.
              </p>
              <div className="container-button">
                <a href="https://devmaroto.github.io/Desafio-Focus-Timer-V2.0-ao-V3.0/" target="_blank" rel="noreferrer" id="button-play">
                  <i className="ph-bold ph-play"></i>
                </a>
                <a href="https://github.com/DevMaroto/Desafio-Focus-Timer-V2.0-ao-V3.0" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="box-project-video">
            <iframe 
              width="340" 
              height="210" 
              src="https://github.com/DevMaroto/Semana-Invertida-DIO/assets/88672028/00729c63-fbc7-4331-a26b-047fb9fd881b" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <div className="text-wrapper">
              <p className="title-project">Stranger Things</p>
              <p className="description-title">
                Landing page inspirada na serie da netflix stranger Things.
              </p>
              <div className="container-button">
                <a href="https://devmaroto.github.io/Semana-Invertida-DIO/" target="_blank" rel="noreferrer" id="button-play">
                  <i className="ph-bold ph-play"></i>
                </a>
                <a href="https://github.com/DevMaroto/Semana-Invertida-DIO" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="box-project">
            <img src="/assets/spacetime.png" alt="Projeto Space Time" />
            <div className="text-wrapper">
              <p className="title-project">Space Time</p>
              <p className="description-title">
                Uma aplicação tanto na web quanto no mobile, você poderá registrar sua jornada ao longo do tempo e espaço.
              </p>
              <div className="container-button">
                <a href="https://github.com/DevMaroto/NLW-SpaceTime-Rocketseat?tab=readme-ov-file" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="box-project">
            <img src="/assets/AIweb.png" alt="Projeto IA 2023" />
            <div className="text-wrapper">
              <p className="title-project">IA 2023</p>
              <p className="description-title">
                Aplicação capaz de realizar upload de videos por meio da AI, gerar automaticamente títulos e descrições interesantes.
              </p>
              <div className="container-button">
                <a href="https://github.com/DevMaroto/NLW-IA-2023" target="_blank" rel="noreferrer" id="button-github">
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="box-h4">
          <h4>Linguagens e Tecnologias</h4>
          <p>Linguagens e tecnologias que tenho contato</p>
        </div>

        <div className="container-tech-language">
          <button 
            className="arrow-left control" 
            aria-label="Previous image"
            onClick={() => moveCarousel(-1)}
          >
            ◀
          </button>
          <button 
            className="arrow-right control" 
            aria-label="Next Image"
            onClick={() => moveCarousel(1)}
          >
            ▶
          </button>

          <div className="gallery-wrapper">
            <div className="gallery-tech-language">
              {techItems.map((src, index) => (
                <img 
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  src={src} 
                  alt="Tecnologia" 
                  className={`item ${index === currentItem ? "current-item" : ""}`} 
                  onClick={() => setCurrentItem(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="container-contact">
        <div className="box-h3">
          <h5 id="contact">Entre em contato</h5>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          <div className="fieldset-wrapper">
            <fieldset disabled={isSubmitting}>
              <div className="fieldset-wrapper">
                  <legend>Coloque suas informações</legend>
                  <div className="box-name">
                    <label htmlFor="name">Nome</label>
                    <input id="name" name="name" type="text" required />
                  </div>
        
                  <div className="box-email">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                  
                  <div className="box-textarea">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                </div>
            </fieldset>

            <div className="box-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <input 
                id="button" 
                type="submit" 
                form="form" 
                value={isSubmitting ? "Enviando..." : "Enviar"} 
                disabled={isSubmitting} 
                style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
              />
              {submitStatus === "success" && (
                <p style={{ color: "var(--primary-color)", fontWeight: "bold" }}>
                  Mensagem enviada com sucesso! 🚀
                </p>
              )}
              {submitStatus === "error" && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Ocorreu um erro ao enviar a mensagem.
                </p>
              )}
            </div>
          </div>
        </form>
      </section>

      <footer>
        <p>© 2026 | DevMaroto (Powered by Lucy)</p>
      </footer>
    </>
  );
}
