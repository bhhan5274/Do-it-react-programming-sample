import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

storiesOf('Doit-UI/Toast', module)
  .add('Toast 예제', () => <Toast message="정상적으로 처리되었습니다." />)
  .add('Toast warning 예제', () => <Toast warning message="문제가 발생하였습니다." />);
