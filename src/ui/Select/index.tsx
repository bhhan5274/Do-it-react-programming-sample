import React, { FC, useRef, useEffect, useState, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

export interface SelectProps {
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  value?: string;
  name?: string;
  large?: boolean;
  xlarge?: boolean;
  small?: boolean;
  xsmall?: boolean;
  autoFocused?: boolean;
  onChange?: any;
  focused?: boolean;
}

const Select: FC<SelectProps> = ({ onChange, disabled, children, name, errorMessage, label, value, ...props }) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (props.autoFocused) {
      ref.current?.focus();
    }
  }, []);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <FieldSet>
      <Label htmlFor={`input_${name}`} errorMessage={errorMessage}>
        {errorMessage || label}
      </Label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SelectOuter {...props} errorMessage={errorMessage} focused={focused}>
        <SelectInner
          id={`input_${name}`}
          ref={ref}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...props}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
        >
          {React.Children.map(children, (child) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            React.cloneElement(child, { disabled }),
          )}
        </SelectInner>
      </SelectOuter>
    </FieldSet>
  );
};

const FieldSet = styled.fieldset`
  border: 0;
  padding: 0;
  position: relative;
`;

const Label = styled.label<SelectProps>`
  display: block;
  top: 2px;
  cursor: pointer;

  ${({ theme }) => css`
    left: ${theme.unit * 2}px;
    font-size: ${theme.size.xs}px;
  `}

  ${({ theme, errorMessage }) =>
    errorMessage &&
    css`
      left: ${theme.unit * 2}px;
      font-size: ${theme.size.xs}px;
    `}
`;

const SelectOuter = styled.div<SelectProps>`
  ${({ theme }) => css`
    margin-top: 2px;
    border: 1px;
    border-color: ${theme.color.primary};
    border-style: solid;
    border-radius: 4px;
    padding: ${theme.unit * 1.5}px;
  `}

  ${({ theme, xsmall }) =>
    xsmall &&
    css`
      padding: ${theme.unit - 1}px;
    `}
  
  ${({ theme, small }) =>
    small &&
    css`
      padding: ${theme.unit}px;
    `}
  
  ${({ theme, large }) =>
    large &&
    css`
      padding: ${theme.unit * 2}px;
    `}
  
  ${({ theme, xlarge }) =>
    xlarge &&
    css`
      padding: ${theme.unit * 2}px;
    `}
  
  ${({ theme, focused }) =>
    focused &&
    css`
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
    `}
  
  ${({ theme, errorMessage }) =>
    errorMessage &&
    css`
      border-color: ${theme.color.error};
    `}
`;

const SelectInner = styled.select<SelectProps>`
  ${({ theme }) => css`
    font-size: ${theme.size.md}px;
    line-height: ${theme.lineHeight.md};
    background-color: ${theme.color.white};
    border: 0;
    outline: none;
    width: 100%;
  `}

  ${({ theme, xsmall }) =>
    xsmall &&
    css`
      font-size: ${theme.size.xs};
    `}
  
  ${({ theme, small }) =>
    small &&
    css`
      font-size: ${theme.size.sm};
    `}
  
  ${({ theme, large }) =>
    large &&
    css`
      font-size: ${theme.size.lg};
    `}
  
  ${({ theme, xlarge }) =>
    xlarge &&
    css`
      font-size: ${theme.size.xg};
    `}
`;

export default Select;
