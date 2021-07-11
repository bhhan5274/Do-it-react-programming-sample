import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Spacing from '../Spacing';

export interface CardProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}

const Card: FC<CardProps> = ({ children, ...spacingProps }) => {
  return (
    <CardDiv>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Spacing {...spacingProps}>{children}</Spacing>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.unit}px;
    background-color: ${theme.color.white};
    display: flex;
    overflow: hidden;
    margin-bottom: ${theme.unit * 4}px;
    box-shadow: ${theme.depth.level1.boxShadow};
  `}
`;

export default Card;
