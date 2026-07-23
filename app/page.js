import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Ivan Kleyton</h1>

        <p>
          Desenvolvedor Front-end construindo experiências para a web.
        </p>
      </div>
    </main>
  );
}