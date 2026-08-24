import React, { useState } from "react";
import type { MouseEvent } from "react";
import styles from "./BentoCard.module.css";

interface BentoCardProps {
  children: React.ReactNode;
  extraLayout?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  extraLayout = "",
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const cardClassName = `${styles.card} ${extraLayout}`.trim();

  return (
    <div
      className={cardClassName}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        {
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
          "--glow-opacity": isHovered ? "1" : "0",
        } as React.CSSProperties
      }
    >
      {/* СЛОИ ДЛЯ БЕГУЩЕЙ СВЕТЯЩЕЙСЯ РАМКИ (активируются при ховере) */}
      <div className={styles.borderBlur} />
      <div className={styles.borderGlow} />
      {/* Слой контента, который перекрывает центр градиента */}
      <div className={styles.contentWrapper}>
        {/* Мягкий внутренний свет за мышью */}
        <div className={styles.glowEffect} />

        {children}
      </div>
    </div>
  );
};
