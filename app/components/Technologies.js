import styles from "./Technologies.module.css";

export default function Technologies() {
  return (
    <section id="tecnologias" className={styles.technologies}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Tecnologias que utilizo</h2>
          <span></span>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <strong>JavaScript</strong>
            <p>Desenvolvimento web</p>
          </article>

          <article className={styles.card}>
            <strong>React</strong>
            <p>Interfaces de usuário</p>
          </article>

          <article className={styles.card}>
            <strong>Next.js</strong>
            <p>Aplicações React</p>
          </article>

          <article className={styles.card}>
            <strong>HTML e CSS</strong>
            <p>Estrutura e estilização</p>
          </article>

          <article className={styles.card}>
            <strong>Python</strong>
            <p>Programação e estudos</p>
          </article>

          <article className={styles.card}>
            <strong>Git e GitHub</strong>
            <p>Controle de versões</p>
          </article>
        </div>
      </div>
    </section>
  );
}