import { useCallback, useState } from "react";
import { FormReturn, InputHandler } from "../utils/formConfig";

const useForm: UseForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  function renderFormInput() {
    return Object.values(form).map((inputObj: FormReturn) => {
      const { value, label, renderInput } = inputObj;
      return renderInput(onInputChange, value, label);
    });
  }

  const onInputChange: InputHandler = useCallback((e) => {
    const { name, value } = e.target;

    const inputObj = { ...form[name], value };

    setForm({ ...form, [name]: inputObj });
  }, [form]);

  //const Input = renderFormInput();

  const getInfo = useCallback(() => {
    let info: Info = {};
    for (const key in form) {
      if (Object.prototype.hasOwnProperty.call(form, key)) {
        info[key] = form[key].value;
      }
    }
    return info;
  }, [form]);

  return [form, renderFormInput, getInfo];
};

export interface Info {
  [name: string]: string;
}

export interface FormObj {
  [name: string]: FormReturn;
}

export type UseForm = (
  formObj: FormObj
) => [form: FormObj, renderFormInput: () => JSX.Element[], getInfo: () => Info];

export default useForm;
