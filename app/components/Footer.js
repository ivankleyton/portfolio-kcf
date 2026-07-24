import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.information}>
          <a className={styles.logo} href="#inicio">
            KCF<span>.</span>
          </a>

          <p>
            Desenvolvendo projetos e transformando aprendizado em experiências
            para a web.
          </p>
        </div>

        <nav className={styles.navigation}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#experiencias">Experiências</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} Ivan Campelo. Todos os direitos reservados.</p>

        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}