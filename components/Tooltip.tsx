import { FC } from "react";
import styles from "../styles/scss/Tooltip.module.scss";

const Tooltip: FC<Tooltip> = ({ children }) => {
  return (
    <div className={styles.tooltip} data-tooltip={children}>
      <span>?</span>
    </div>
  );
};

export interface Tooltip {
  children: string;
}

export default Tooltip;
