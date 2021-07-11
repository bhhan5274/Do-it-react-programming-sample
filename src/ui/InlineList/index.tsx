import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface InlineListProps {
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  spacingBetween?: number;
}

const InlineList: FC<InlineListProps> = ({ align, verticalAlign, spacingBetween = 1, children }) => {
  return (
    <InlineListDiv align={align} verticalAlign={verticalAlign}>
      {React.Children.map(children, (child) => (
        <ChildDiv spacingBetween={spacingBetween}>{child}</ChildDiv>
      ))}
    </InlineListDiv>
  );
};

const ChildDiv = styled.div<{ spacingBetween?: number }>`
  ${({ spacingBetween, theme }) =>
    spacingBetween &&
    css`
      margin-right: ${spacingBetween * theme.unit}px;
    `}
`;

const InlineListDiv = styled.div<InlineListProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  ${({ align }) => setAlign(align)}
  ${({ verticalAlign }) => setVerticalAlign(verticalAlign)}
`;

const setAlign = (align?: string) => {
  switch (align) {
    case 'left':
      return 'justify-content: flex-start';
    case 'center':
      return 'justify-content: center';
    case 'right':
      return 'justify-content: flex-end';
    default:
      return '';
  }
};

const setVerticalAlign = (verticalAlign?: string) => {
  switch (verticalAlign) {
    case 'top':
      return 'align-items: flex-start';
    case 'middle':
      return 'align-items: center';
    case 'bottom':
      return 'align-items: flex-end';
    default:
      return '';
  }
};

export default InlineList;
