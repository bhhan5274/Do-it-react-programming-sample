import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface TableCellProps {
  align?: 'left' | 'center' | 'right';
  baseline?: boolean;
  isHeader?: boolean;
}

const TableCell: FC<TableCellProps> = ({ children, align, baseline, isHeader }) => {
  if (isHeader) {
    return (
      <HeadDiv align={align} baseline={baseline}>
        {children}
      </HeadDiv>
    );
  }
  return (
    <DataDiv align={align} baseline={baseline}>
      {children}
    </DataDiv>
  );
};

const defaultStyles = (theme: any) => {
  let properties = '';

  properties += `padding-top: ${theme.unit * 4}px;`;
  properties += `padding-bottom: ${theme.unit * 4}px;`;
  properties += `padding-right: ${theme.unit * 8}px;`;
  properties += `padding-left: ${theme.unit * 8}px;`;
  properties += `background-color: ${theme.color.white};`;
  properties += `text-align: left;`;

  return properties;
};

const baselineStyle = (baseline?: boolean, color?: string) => {
  if (baseline) {
    return `border-bottom: 1px solid ${color};`;
  }
  return '';
};

const alignStyle = (align?: string) => {
  if (align === 'center') {
    return 'text-align: center;';
  }
  if (align === 'right') {
    return 'text-align: right;';
  }
  return '';
};

const HeadDiv = styled.th<TableCellProps>`
  ${({ theme, align, baseline }) => {
    let properties = '';
    properties += defaultStyles(theme);
    properties += `background-color: ${theme.color.primary};`;
    properties += `color: ${theme.color.white};`;
    properties += baselineStyle(baseline, theme.color.border);
    properties += alignStyle(align);

    return properties;
  }}
`;

const DataDiv = styled.td<TableCellProps>`
  ${({ theme, align, baseline }) => {
    let properties = '';
    properties += defaultStyles(theme);
    properties += baselineStyle(baseline, theme.color.border);
    properties += alignStyle(align);

    return properties;
  }}
`;

export default TableCell;
