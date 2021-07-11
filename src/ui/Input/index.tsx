import React, { ChangeEvent, FC, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface InputProps {
  errorMessage?: string;
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  xsmall?: boolean;
  small?: boolean;
  large?: boolean;
  xlarge?: boolean;
  autoFocus?: boolean;
  onChange?: any;
}

const Input: FC<InputProps> = ({ onChange, autoFocus, name, label, type = 'text', ...props }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, []);

  return (
    <FieldSet>
      <Label htmlFor={`input_${name}`}>{props.errorMessage || label}</Label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputDiv {...props} id={`input_${name}`} ref={ref} type={type} onChange={handleChange} />
    </FieldSet>
  );
};

const FieldSet = styled.fieldset`
  border: 0;
  padding: 0;
  position: relative;
`;

const Label = styled.label<InputProps>`
  display: block;
  top: 2px;
  cursor: pointer;

  ${({ theme }) => css`
    font-size: ${theme.size.xs}px;
    left: ${theme.unit * 2}px;
  `}

  ${({ theme, errorMessage }) =>
    errorMessage &&
    css`
      color: ${theme.color.error};
    `}
`;

const InputDiv = styled.input<InputProps>`
  margin-top: 2px;
  border: 1px;
  border-style: solid;
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
  }

  ${({ theme }) => css`
    font-size: ${theme.size.md};
    line-height: ${theme.lineHeight.md};
    padding: ${theme.unit * 1.5}px;
    border-color: ${theme.color.primary};
  `}

  ${({ theme, errorMessage }) =>
    errorMessage &&
    css`
      border-color: ${theme.color.error};
    `}
  
  ${({ theme, small }) =>
    small &&
    css`
      font-size: ${theme.size.sm}px;
      padding: ${theme.unit}px;
    `}
  
  ${({ theme, xsmall }) =>
    xsmall &&
    css`
      font-size: ${theme.size.xs}px;
      padding: ${theme.unit}px;
    `}
  
  ${({ theme, xlarge }) =>
    xlarge &&
    css`
      font-size: ${theme.size.xg}px;
    `}
  
  ${({ theme, large }) =>
    large &&
    css`
      font-size: ${theme.size.lg}px;
    `}
`;

export default Input;
