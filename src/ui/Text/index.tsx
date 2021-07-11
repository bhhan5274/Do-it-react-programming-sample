import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
  bold?: boolean;
  light?: boolean;
  xsmall?: boolean;
  small?: boolean;
  large?: boolean;
  xlarge?: boolean;
  secondary?: boolean;
  primary?: boolean;
  inverse?: boolean;
}

const Text: FC<TextProps> = ({ children, ...props }) => {
  return (
    <TextDiv
      bold={props.bold}
      light={props.light}
      xsmall={props.xsmall}
      small={props.small}
      large={props.large}
      xlarge={props.xlarge}
      secondary={props.secondary}
      primary={props.primary}
      inverse={props.inverse}
    >
      {children}
    </TextDiv>
  );
};

const TextDiv = styled.span<TextProps>`
  ${({ theme }) => css`
    color: ${theme.color.default};
    font-size: ${theme.size.md}px;
    line-height: ${theme.lineHeight.md};
    font-weight: ${theme.fontWeight.normal};
  `}

  ${({ bold, light, xsmall, small, large, xlarge, secondary, primary, inverse, theme }) => {
    let cssProperties = '';

    if (bold) {
      cssProperties += `font-weight: ${theme.fontWeight.bold};`;
    }

    if (light) {
      cssProperties += `font-weight: ${theme.fontWeight.light};`;
    }

    if (xsmall) {
      cssProperties += `font-size: ${theme.size.xs}px;`;
      cssProperties += `line-height: ${theme.lineHeight.xs};`;
    }

    if (small) {
      cssProperties += `font-size: ${theme.size.sm}px;`;
      cssProperties += `line-height: ${theme.lineHeight.sm};`;
    }

    if (large) {
      cssProperties += `font-size: ${theme.size.lg}px;`;
      cssProperties += `line-height: ${theme.lineHeight.lg};`;
    }

    if (xlarge) {
      cssProperties += `font-size: ${theme.size.xg}px;`;
      cssProperties += `line-height: ${theme.lineHeight.xg};`;
    }

    if (primary) {
      cssProperties += `color: ${theme.color.primary};`;
    }

    if (secondary) {
      cssProperties += `color: ${theme.color.secondary};`;
    }

    if (inverse) {
      cssProperties += `color: ${theme.color.white};`;
    }

    return cssProperties;
  }}
`;

export default Text;
