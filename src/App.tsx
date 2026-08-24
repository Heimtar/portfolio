import { Header } from "./components/Header/Header";
import { BentoGrid } from "./components/BentoGrid/BentoGrid";
import { BentoCard } from "./components/BentoCard/BentoCard";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { useLanguage } from "./context/useLanguage";
import styles from "./App.module.css";

function App() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        padding: "1rem 1.5rem",
      }}
    >
      {/* 1. Наша изолированная шапка */}
      <Header />

      <main>
        {/* 2. Контейнер Bento Grid */}
        <BentoGrid>
          {/* ПЛИТКА 1: HERO (Занимает 2 колонки) */}
          <BentoCard extraLayout={styles.span2}>
            <div>
              <div className={styles.badge}>{t.hero.badge}</div>
              <h1 className={styles.heroTitle}>
                {t.hero.title}
                <span className={styles.accent}>{t.hero.accentName}</span>
              </h1>
              <p className={`${styles.text} ${styles.heroText}`}>
                {t.hero.description}
              </p>
            </div>
            <div className={styles.buttons}>
              {/* Ссылка-заглушка под будущий PDF в папке public */}
              <a
                href="/resume.pdf"
                download
                className={`${styles.btn} ${styles.primary}`}
              >
                {t.hero.btnResume}
              </a>
              <a
                href="mailto:your-email@example.com"
                className={`${styles.btn} ${styles.secondary}`}
              >
                {t.hero.btnContact}
              </a>
            </div>
          </BentoCard>

          {/* ПЛИТКА 2: ИНЖЕНЕРНЫЙ ПОДХОД (Занимает 1 колонку) */}
          <BentoCard>
            <div>
              <h2 className={styles.sectionTitle}>{t.approach.title}</h2>
              <p className={styles.text}>{t.approach.description}</p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: "1.5rem 0 0.5rem 0",
                  color: "var(--text-main)",
                }}
              >
                {t.approach.stackTitle}
              </div>
              <div className={styles.stackList}>
                {/* Выводим часть тегов для красоты интерфейса плашки */}
                <span
                  style={{
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--card-border)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  React 18/19
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--card-border)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  TypeScript
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--card-border)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  Git Control
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--card-border)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  JavaScript (ES6+)
                </span>
              </div>
            </div>
          </BentoCard>

          {/* ПЛИТКИ 3-10: ЦИКЛ ПО ПРОЕКТАМ ИЗ НАШЕЙ БАЗЫ ДАННЫХ */}
          {t.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {/* ПЛИТКА 11: КОНТАКТЫ / ПОДВАЛ (Занимает все 3 колонки) */}
          <BentoCard extraLayout={styles.span3}>
            <div className={styles.contactContent} id="contacts">
              <div>
                <h2
                  className={styles.sectionTitle}
                  style={{ marginBottom: "0.25rem" }}
                >
                  {t.contacts.title}
                </h2>
                <p className={styles.text} style={{ fontSize: "0.9rem" }}>
                  {t.contacts.location}
                </p>
              </div>
              <div className={styles.footerLinks}>
                <a
                  href="mailto:your-email@example.com"
                  className={styles.footerLink}
                >
                  Email
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  GitHub
                </a>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </main>
    </div>
  );
}

export default App;
