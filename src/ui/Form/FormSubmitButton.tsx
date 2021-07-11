import React, { FC } from 'react';
import { FormContext } from './index';
import Button from '../Button';

const FormSubmitButton: FC = ({ children }) => {
  return (
    <FormContext.Consumer>
      {() => (
        <Button primary type="submit">
          {children}
        </Button>
      )}
    </FormContext.Consumer>
  );
};

export default FormSubmitButton;
