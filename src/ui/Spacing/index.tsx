import React, { FC } from 'react';
import styled from 'styled-components';

export interface SpacingProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}

const Spacing: FC<SpacingProps> = ({ children, top, left, right, bottom, horizontal, vertical }) => {
  return (
    <SpacingDiv top={top} left={left} right={right} bottom={bottom} horizontal={horizontal} vertical={vertical}>
      {children}
    </SpacingDiv>
  );
};

const SpacingDiv = styled.div<SpacingProps>`
  ${({ top, left, right, bottom, vertical, horizontal, theme }) => {
    let cssProperties = '';

    if (top) {
      cssProperties += `margin-top: ${top * theme.unit}px;`;
    }

    if (left) {
      cssProperties += `margin-left: ${left * theme.unit}px;`;
    }

    if (right) {
      cssProperties += `margin-right: ${right * theme.unit}px;`;
    }

    if (bottom) {
      cssProperties += `margin-bottom: ${bottom * theme.unit}px;`;
    }

    if (vertical) {
      cssProperties += `margin: ${vertical * theme.unit}px 0;`;
    }

    if (horizontal) {
      cssProperties += `margin: 0 ${horizontal * theme.unit}px;`;
    }

    if (vertical && horizontal) {
      cssProperties += `margin: ${vertical * theme.unit}px ${horizontal * theme.unit}px;`;
    }

    return cssProperties;
  }}
`;

export default Spacing;
