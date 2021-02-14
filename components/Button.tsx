import { FC, ReactChildren, ReactNode } from "react";
import styles from "../styles/scss/Button.module.scss";

const Button: FC<Button> = ({ children, type }) => {
  return (
    <div className={styles.submit}>
      <button type={type}>{children}</button>
    </div>
  );
};

export interface Button {
  children: ReactNode;
  type: "submit" | "reset" | "button";
}

export default Button;
