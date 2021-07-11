import React, { FC } from 'react';

export interface OptionProps {
  value?: string;
  label?: string;
  disabled?: boolean;
}

const Option: FC<OptionProps> = ({ value, label, disabled, children }) => {
  return (
    <option value={value} disabled={disabled}>
      {label || value}
    </option>
  );
};

export default Option;
