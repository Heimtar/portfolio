import React from 'react';
import { BentoCard } from '../BentoCard/BentoCard';
import type { ProjectData } from '../../data/translations';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, descriptionUser, descriptionTech, tags, demoUrl, codeUrl, isPlaceholder } = project;

  const cardContentClass = isPlaceholder 
    ? `${styles.content} ${styles.placeholder}` 
    : styles.content;

  return (
    <BentoCard>
      <div className={cardContentClass}>
        <div>
          {/* Теги технологий сверху */}
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className={styles.title}>{title}</h3>
          
          {/* 1. ОПИСАНИЕ ДЛЯ КЛИЕНТА (Бизнес-уровень) */}
          <p className={styles.descriptionUser}>{descriptionUser}</p>
          
          {/* Технологический маркер-разделитель (показываем только для реальных проектов) */}
          {!isPlaceholder && (
            <div className={styles.techDivider}>// Engineering Spec:</div>
          )}
          
          {/* 2. ОПИСАНИЕ ДЛЯ ТИМЛИДА (Технический уровень) */}
          <p className={styles.descriptionTech}>{descriptionTech}</p>
        </div>

        {/* Интерактивный подвал карточки */}
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
