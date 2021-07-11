import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'styled-components';
import InlineList from './index';

const RedBox: FC = ({ children }) => {
  return <Container height={Math.random() * 100}>{children}</Container>;
};

const Container = styled.div<{ height: number }>`
  background-color: red;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ height }) =>
    css`
      height: ${height}px;
    `}
`;

storiesOf('Doit-UI/InlineList', module)
  .add('기본 설정', () => (
    <InlineList>
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('align=center', () => (
    <InlineList align="center">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('align=right', () => (
    <InlineList align="right">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('verticalAlign=top', () => (
    <InlineList verticalAlign="top">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .add('verticalAlign=bottom', () => (
    <InlineList verticalAlign="bottom">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ));
