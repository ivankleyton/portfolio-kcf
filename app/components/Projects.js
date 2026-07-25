import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <p className={styles.subtitle}>MEU TRABALHO</p>
            <h2>Projetos em destaque</h2>
          </div>
        </div>

        <div className={styles.projectGrid}>
          <article className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/images/projects/portfolio.png"
                alt="Captura da página inicial do Portfólio KCF"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.projectScreenshot}
              />
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3>Portfólio KCF</h3>
                <span className={styles.status}>Em desenvolvimento</span>
              </div>

              <p>
                Portfólio pessoal desenvolvido para apresentar minha trajetória,
                tecnologias e projetos na área de desenvolvimento web.
              </p>

              <div className={styles.technologies}>
                <span>Next.js</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                className={styles.projectLink}
                href="https://github.com/ivankleyton/portfolio-kcf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub →
              </a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={`${styles.projectImage} ${styles.movieProject}`}>
              <span>Site de Filmes</span>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3>Site de Filmes</h3>
                <span className={styles.plannedStatus}>Planejado</span>
              </div>

              <p>
                Projeto de uma plataforma para pesquisar filmes, visualizar
                informações e organizar títulos de interesse.
              </p>

              <div className={styles.technologies}>
                <span>React</span>
                <span>JavaScript</span>
                <span>API</span>
                <span>CSS</span>
              </div>

              <span className={styles.comingSoon}>Projeto em breve</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}