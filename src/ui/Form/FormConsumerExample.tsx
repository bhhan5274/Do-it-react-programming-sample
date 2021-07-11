import React, { FC } from 'react';
import Input from '../Input';
import { FormContext } from './index';

const FormConsumerExample: FC<any> = ({ name, ...otherProps }) => {
  return (
    <FormContext.Consumer>
      {({ values, errors, onChange }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Input {...otherProps} name={name} onChange={onChange} value={values[name]} errorMessage={errors[name]} />
      )}
    </FormContext.Consumer>
  );
};

export default FormConsumerExample;
