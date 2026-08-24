import React from "react";
import styles from "./BentoGrid.module.css";

interface BentoGridProps {
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return <section className={styles.grid}>{children}</section>;
};
