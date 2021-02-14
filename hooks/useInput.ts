import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const useInput = (): UseInputGen => {
  const [input, setInput] = useState({ defaultValue: "" });

  const inputHandler = (e: Event) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const empty = () => setInput({ defaultValue: "" })

  useEffect(() => console.log(input), [input])

  return [input, inputHandler, empty];
};

export type FormHandler = (e: Event) => void;

export type Elem =
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLFormElement;

export type Event = ChangeEvent<HTMLInputElement>;

export interface InputVal {
  defaultValue: string;
  [name: string]: string;
}

export type UseInputGen = [input: InputVal, inputHandler: FormHandler, empty: () => void];

export default useInput;
