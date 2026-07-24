import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.subtitle}>SOBRE MIM</p>

            <h2>Transformando aprendizado em projetos reais.</h2>

            <p>
              Sou estudante de Ciência da Computação na Universidade Federal do
              Maranhão e desenvolvedor Front-end em formação.
            </p>

            <p>
              Estou aprimorando meus conhecimentos em JavaScript, React e
              Next.js por meio de projetos práticos, buscando desenvolver
              interfaces organizadas, responsivas e fáceis de utilizar.
            </p>

            <p>
              Este portfólio também faz parte da minha evolução como
              desenvolvedor, reunindo projetos, experiências e tecnologias que
              estou aprendendo ao longo da minha trajetória.
            </p>
          </div>

          <div className={styles.highlights}>
            <article className={styles.highlightCard}>
              <span className={styles.number}>01</span>
              <h3>Formação</h3>
              <p>Ciência da Computação na UFMA.</p>
            </article>

            <article className={styles.highlightCard}>
              <span className={styles.number}>02</span>
              <h3>Desenvolvimento</h3>
              <p>Foco atual em Front-end e aplicações web.</p>
            </article>

            <article className={styles.highlightCard}>
              <span className={styles.number}>03</span>
              <h3>Aprendizado</h3>
              <p>Projetos práticos e evolução constante.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}