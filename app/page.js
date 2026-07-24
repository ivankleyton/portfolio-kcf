import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
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
                Desenvolvedor Front-end e estudante apaixonado por tecnologia.
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
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className={styles.imageArea}>
              <div className={styles.imageCircle}>
                <span>Sua foto</span>
              </div>

              <div className={styles.studentCard}>
                <strong>Estudante de</strong>
                <span>Ciência da Computação</span>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}