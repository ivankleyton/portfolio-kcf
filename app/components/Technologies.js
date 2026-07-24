import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

import styles from "./Technologies.module.css";

const technologies = [
  {
    name: "JavaScript",
    description: "Desenvolvimento web",
    icon: SiJavascript,
  },
  {
    name: "React",
    description: "Interfaces de usuário",
    icon: SiReact,
  },
  {
    name: "Next.js",
    description: "Aplicações React",
    icon: SiNextdotjs,
  },
  {
    name: "HTML",
    description: "Estrutura das páginas",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    description: "Estilização e responsividade",
    icon: SiCss,
  },
  {
    name: "Python",
    description: "Programação e estudos",
    icon: SiPython,
  },
  {
    name: "Git",
    description: "Controle de versões",
    icon: SiGit,
  },
  {
    name: "GitHub",
    description: "Repositórios e projetos",
    icon: SiGithub,
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className={styles.technologies}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>MINHAS FERRAMENTAS</p>
          <h2>Tecnologias que utilizo</h2>
          <span></span>
        </div>

        <div className={styles.cards}>
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article className={styles.card} key={technology.name}>
                <div className={styles.icon}>
                  <Icon />
                </div>

                <div>
                  <strong>{technology.name}</strong>
                  <p>{technology.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}