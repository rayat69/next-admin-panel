import { ChangeEvent } from "react";
import Input from "../components/Input";

const createFormConfig: FormField = (
  name,
  label,
  type = "text",
  defaultValue = ""
) => {
  return {
    renderInput: (inputHandler, value, key) => (
      <Input
        key={key}
        type={type}
        name={name}
        value={value}
        onChange={inputHandler}
        label={label}
      />
    ),
    label,
    value: defaultValue,
  };
};

export const loginForm = {
  username: { ...createFormConfig("username", "Username") },
  password: { ...createFormConfig("password", "Password", "password") },
};

// Types

export type FormField = (
  label: string,
  name: string,
  type?: string,
  defaultValue?: string
) => FormReturn;

export type InputHandler = (e?: ChangeEvent<HTMLInputElement>) => void;

export type RenderedInput = (
  inputHandler: InputHandler,
  value: string,
  key: string | number
) => JSX.Element;

export interface FormReturn {
  renderInput: RenderedInput;
  label: string;
  value: string;
}

export default createFormConfig;
