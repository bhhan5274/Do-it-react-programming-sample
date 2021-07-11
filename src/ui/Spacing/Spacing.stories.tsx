import { storiesOf } from '@storybook/react';
import React, { FC } from 'react';
import Spacing from './index';

const RedBox: FC = ({ children }) => {
  return (
    <div
      style={{
        border: '1px red solid',
        minHeight: 100,
      }}
    >
      {children}
    </div>
  );
};

storiesOf('Doit-UI/Spacing', module).add('기본 설정', () => (
  <>
    <Spacing top={1}>
      <RedBox>top: 1</RedBox>
    </Spacing>
    <Spacing bottom={2}>
      <RedBox>bottom: 2</RedBox>
    </Spacing>
    <Spacing left={3}>
      <RedBox>left: 3</RedBox>
    </Spacing>
    <Spacing right={4}>
      <RedBox>right: 3</RedBox>
    </Spacing>
    <Spacing horizontal={5}>
      <RedBox>horizontal: 5</RedBox>
    </Spacing>
    <Spacing vertical={6}>
      <RedBox>vertical: 6</RedBox>
    </Spacing>
    <Spacing top={1} bottom={2} left={3} right={4}>
      <RedBox>top, bottom, left, right</RedBox>
    </Spacing>
  </>
));
