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
    // Вычисляем точные координаты курсора внутри самой карточки в пикселях
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
          // Передаем координаты и состояние ховера как CSS-переменные
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
          "--glow-opacity": isHovered ? "1" : "0",
        } as React.CSSProperties
      }
    >
      {/* Скрытый слой «мягкого золотого света», который будет следовать за мышью */}
      <div className={styles.glowEffect} />

      {/* Основной контент карточки (должен быть выше слоя со светом) */}
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
