"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#inicio" onClick={closeMenu}>
          KCF<span>.</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${styles.menu} ${
            menuOpen ? styles.menuOpen : ""
          }`}
        >
          <nav
            id="main-navigation"
            className={styles.navigation}
          >
            <a
              className={styles.active}
              href="#inicio"
              onClick={closeMenu}
            >
              Início
            </a>

            <a href="#sobre" onClick={closeMenu}>
              Sobre mim
            </a>

            <a href="#tecnologias" onClick={closeMenu}>
              Tecnologias
            </a>

            <a href="#experiencias" onClick={closeMenu}>
              Experiências
            </a>

            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>

            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </nav>

          <a
            className={styles.contactButton}
            href="#contato"
            onClick={closeMenu}
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </header>
  );
}