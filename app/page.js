import Header from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main id="inicio" className={styles.main}>
        <div className={styles.content}>
          <h1>Ivan Kleyton</h1>

          <p>
            Desenvolvedor Front-end construindo experiências para a web.
          </p>
        </div>
      </main>
    </div>
  );
}