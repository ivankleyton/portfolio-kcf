"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme =
      savedTheme || (prefersDarkMode ? "dark" : "light");

    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
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

          <button
            className={styles.themeButton}
            type="button"
            aria-label="Alternar entre modo claro e escuro"
            onClick={toggleTheme}
          >
            <span className={styles.moonIcon} aria-hidden="true">
              ☾
            </span>

            <span className={styles.sunIcon} aria-hidden="true">
              ☀
            </span>

            <span className={styles.darkLabel}>Modo escuro</span>
            <span className={styles.lightLabel}>Modo claro</span>
          </button>

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