import { FC } from "react";
import { FormHandler } from "../hooks/useInput";
import styles from "../styles/scss/Input.module.scss";

const Input: FC<InputProp> = ({
  name,
  label,
  value,
  onChange,
  maxLength = 150,
  type,
  ...props
}) => {
  return (
    <div className={styles.input}>
      <label className="required" htmlFor={`id_${name}`}>
        {label}:
      </label>{" "}
      <input
        {...props}
        type={type}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        autoFocus
        autoCapitalize="none"
        autoComplete={name}
        required
        id={`id_${name}`}
      />
    </div>
  );
};

export interface InputProp {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: FormHandler;
  maxLength?: number | 150;
}

export default Input;
