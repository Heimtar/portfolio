import React from 'react';
import { BentoCard } from '../BentoCard/BentoCard'; 
import type { ProjectData } from '../../data/translations';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, demoUrl, codeUrl, isPlaceholder } = project;

  // Если это заглушка, навешиваем специальный класс для стилизации
  const cardContentClass = isPlaceholder 
    ? `${styles.content} ${styles.placeholder}` 
    : styles.content;

  return (
    <BentoCard>
      <div className={cardContentClass}>
        <div>
          {/* Теги технологий сверху карточки */}
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Ссылки показываем только для реальных проектов */}
        {!isPlaceholder ? (
          <div className={styles.links}>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkDemo}>
              Live Demo <span className={styles.arrow}>→</span>
            </a>
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.linkCode}>
                GitHub
              </a>
            )}
          </div>
        ) : (
          <div className={styles.placeholderStatus}>
            <span className={styles.pulseDot}></span> In Progress
          </div>
        )}
      </div>
    </BentoCard>
  );
};
