import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>VAMOS CONVERSAR</p>

          <h2>Tem uma ideia ou oportunidade?</h2>

          <p className={styles.description}>
            Estou disponível para conversar sobre projetos, oportunidades de
            aprendizado e desenvolvimento web.
          </p>

          <a
            className={styles.emailButton}
            href="mailto:ivankleyton12@gmail.com"
          >
            Enviar e-mail
          </a>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/ivankleyton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <strong>Ver meus repositórios →</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/ivankleyon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <strong>Conectar profissionalmente →</strong>
          </a>

          <a href="mailto:ivankleyton12@gmail.com">
            <span>E-mail</span>
            <strong>ivankleyton12@gmail.com →</strong>
          </a>
        </div>
      </div>
    </section>
  );
}