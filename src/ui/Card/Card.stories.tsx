import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacing from '../Spacing';
import Card from './index';
import Text from '../Text';

storiesOf('Doit-UI/Card', module)
  .add('Card 예제', () => (
    <Spacing vertical={2} horizontal={2}>
      <Card>
        <Text xlarge>제목</Text>
        <br />
        <Text large>내용이 함께 들어갑니다</Text>
      </Card>
    </Spacing>
  ))
  .add('Card Spacing 예제', () => (
    <Spacing vertical={2} horizontal={2}>
      <Card vertical={2} horizontal={2}>
        <Text xlarge>제목</Text>
        <br />
        <Text large>내용이 함께 들어갑니다</Text>
      </Card>
    </Spacing>
  ));
