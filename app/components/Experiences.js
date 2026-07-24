import styles from "./Experiences.module.css";

export default function Experiences() {
  return (
    <section id="experiencias" className={styles.experiences}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>MINHA TRAJETÓRIA</p>
          <h2>Experiências</h2>

          <span></span>
        </div>

        <div className={styles.timeline}>
          <article className={styles.experience}>
            <div className={styles.period}>
              <span>Outubro de 2022</span>
              <span>Maio de 2025</span>
            </div>

            <div className={styles.content}>
              <p className={styles.company}>Tecnews Eirelli · UFMA</p>

              <h3>Assistente Administrativo</h3>

              <p className={styles.description}>
                Atuação em uma empresa terceirizada da Universidade Federal do
                Maranhão, realizando atividades administrativas e oferecendo
                suporte tecnológico às rotinas do setor.
              </p>

              <ul>
                <li>Utilização de sistemas acadêmicos e do SEI.</li>
                <li>Atualização de conteúdos no site institucional.</li>
                <li>Suporte a professores, laboratórios e equipamentos.</li>
                <li>Apoio em redes e processos tecnológicos.</li>
                <li>Automação de tarefas administrativas.</li>
              </ul>
            </div>
          </article>

          <article className={styles.experience}>
            <div className={styles.period}>
              <span>Experiência</span>
              <span>institucional</span>
            </div>

            <div className={styles.content}>
              <p className={styles.company}>
                Centro de Ciências Humanas · UFMA
              </p>

              <h3>Comunicação e apoio tecnológico</h3>

              <p className={styles.description}>
                Participação em atividades de comunicação institucional,
                organização de equipes e suporte a demandas administrativas e
                tecnológicas.
              </p>

              <ul>
                <li>Produção de conteúdos para canais institucionais.</li>
                <li>Organização de informações e divulgação de eventos.</li>
                <li>Acompanhamento de bolsistas e estagiários.</li>
                <li>Apoio às necessidades tecnológicas do setor.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}