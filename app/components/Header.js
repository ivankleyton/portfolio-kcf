import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#inicio">
        KCF
      </a>

      <nav className={styles.navigation}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}