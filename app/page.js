import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section id="inicio" className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.presentation}>
              <p className={styles.greeting}>OLÁ, EU SOU</p>

              <h1>
                Ivan Campelo<span>.</span>
              </h1>

              <h2>
                Desenvolvedor Web com foco em Front-end e apaixonado por tecnologia.
              </h2>

              <p className={styles.description}>
                Desenvolvo soluções modernas para a web enquanto aprimoro meus
                conhecimentos em tecnologia e programação.
              </p>

              <div className={styles.buttons}>
                <a className={styles.primaryButton} href="#projetos">
                  Ver projetos
                </a>

                <a className={styles.secondaryButton} href="#sobre">
                  Sobre mim
                </a>
              </div>

              <div className={styles.socialLinks}>
                  <a
                    href="https://github.com/ivankleyton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/in/ivankleyon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://www.instagram.com/ivankleyton/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="mailto:ivankleyton12@gmail.com"
                    aria-label="Enviar e-mail"
                    title="Enviar e-mail"
                  >
                    <FaEnvelope />
                  </a>
                </div>
            </div>

            <div className={styles.imageArea}>
              <span className={styles.greenDot}></span>
              <span className={styles.outlineCircle}></span>

              <div className={styles.codeBadge} aria-hidden="true">
                {"</>"}
              </div>

              <div className={styles.imageCircle}>
                <Image
                  src="/images/perfil.png"
                  alt="Foto de Ivan Campelo"
                  fill
                  sizes="(max-width: 600px) 300px, 420px"
                  className={styles.profileImage}
                  priority
                />
              </div>

              <div className={styles.studentCard}>
                <span className={styles.cardIcon} aria-hidden="true">
                  ✓
                </span>

                <div>
                  <strong>Desenvolvedor Web</strong>
                  <span>Foco em Front-end</span>
                </div>
              </div>
            </div>
          
            <div className={styles.heroStats}>
              <article className={styles.stat}>
                <strong>01</strong>
                <span>Projeto em desenvolvimento</span>
              </article>

            <article className={styles.stat}>
                <strong>06+</strong>
                <span>Tecnologias em estudo</span>
              </article>
          

            <article className={styles.stat}>
                <strong>Front-end</strong>
                <span>Foco atual de desenvolvimento</span>
              </article>
              </div>
          </div>
        </section>
        
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}