import React from "react";
import styles from "./BentoCard.module.css";

interface BentoCardProps {
  children: React.ReactNode;
  /** Позволяет передать специфичный класс для управления размером плитки (например, span-2) */
  extraLayout?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  extraLayout = "",
}) => {
  // Объединяем базовый класс карточки и дополнительный класс разметки, если он передан
  const cardClassName = `${styles.card} ${extraLayout}`.trim();

  return <div className={cardClassName}>{children}</div>;
};
