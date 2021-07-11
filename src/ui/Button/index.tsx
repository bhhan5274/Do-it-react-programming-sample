import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  disabled?: boolean;
  large?: boolean;
  xlarge?: boolean;
  small?: boolean;
  xsmall?: boolean;
  primary?: boolean;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onPress?: any;
}

const Button: FC<ButtonProps> = ({ children, onPress, type = 'submit', ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonDiv {...props} type={type} onClick={onPress}>
      {children}
    </ButtonDiv>
  );
};

const ButtonDiv = styled.button<ButtonProps>`
  border: 1px;
  border-style: solid;

  ${({ theme }) => css`
    box-shadow: ${theme.depth.level1};
    border-color: ${theme.color.default};
    border-radius: ${theme.unit}px;
    color: ${theme.color.default};
    font-size: ${theme.size.md}px;
    font-weight: ${theme.fontWeight.bold};
    padding: ${theme.unit * 2}px;
    padding-left: ${theme.unit * 4}px;
    padding-right: ${theme.unit * 4}px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.grayLight};
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
    }
  `}

  ${({ xlarge, theme }) =>
    xlarge &&
    css`
      font-size: ${theme.size.xg}px;
      padding: ${theme.unit * 2.5}px;
    `}
  
  ${({ large, theme }) =>
    large &&
    css`
      font-size: ${theme.size.lg}px;
      padding: ${theme.unit * 2.5}px;
    `}
  
  ${({ small, theme }) =>
    small &&
    css`
      font-size: ${theme.size.sm}px;
      padding: ${theme.unit * 1.5}px;
    `}

  ${({ xsmall, theme }) =>
    xsmall &&
    css`
      font-size: ${theme.size.xs}px;
      padding: ${theme.unit}px;
    `}
  
  ${({ primary, theme }) =>
    primary &&
    css`
      border-color: ${theme.color.primary};
      color: ${theme.color.white};
      background-color: ${theme.color.primary};

      &:hover {
        background-color: ${theme.color.primaryDark};
      }
    `}
  
  ${({ secondary, theme }) =>
    secondary &&
    css`
      border-color: ${theme.color.secondary};
      color: ${theme.color.secondary};
    `}
  
  ${({ disabled, theme }) =>
    disabled &&
    css`
      border-color: ${theme.color.grayDark};
      color: ${theme.color.grayLight};
      cursor: default;
      opacity: 0.5;
      background-color: ${theme.color.gray};

      &:hover {
        background-color: ${theme.color.gray};
      }
    `}
`;

export default Button;
