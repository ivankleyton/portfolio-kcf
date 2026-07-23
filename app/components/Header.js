import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#inicio">
          KCF<span>.</span>
        </a>

        <nav className={styles.navigation}>
          <a className={styles.active} href="#inicio">
            Início
          </a>

          <a href="#sobre">Sobre mim</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#experiencias">Experiências</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className={styles.contactButton} href="#contato">
          Vamos conversar
        </a>
      </div>
    </header>
  );
}