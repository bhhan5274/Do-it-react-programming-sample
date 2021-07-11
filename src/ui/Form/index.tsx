import React, { FC, FormEvent, useState, useEffect, useMemo } from 'react';

export interface FormProps {
  validate?: any;
  onSubmit?: any;
  initValues?: any;
}

export interface FormContextProps {
  errors?: any;
  values?: any;
  onChange?: (name: string, updatedValue: string) => void;
  reset?: () => void;
}

export const FormContext = React.createContext<FormContextProps>({});

const Form: FC<FormProps> = ({ initValues, validate, onSubmit, children }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useMemo(() => {
    setValues(initValues);
  }, [initValues]);

  useEffect(() => {
    onValidate(values);
  }, [values]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(errors).length === 0) {
      onSubmit?.(values);
    }
  };

  const onChange = (name: string, updatedValue: string) => {
    /* const params = {
      ...values,
      [name]: updatedValue || undefined,
    }; */

    setValues({
      ...values,
      [name]: updatedValue,
    });
  };

  const reset = () => {
    setValues({});
  };

  const onValidate = (values: any) => {
    if (values && validate) {
      const errors = validate(values);
      setErrors(errors);
    }
  };

  return (
    <FormContext.Provider
      value={{
        errors,
        values,
        onChange,
        reset,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;
