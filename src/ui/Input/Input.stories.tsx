import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index';

storiesOf('Doit-UI/Input', module)
  .add('기본 설정', () => <Input name="name" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />)
  .add('value 예제', () => <Input name="name" label="이름" value="두잇" />)
  .add('errorMessage 예제', () => <Input name="name" label="이름" errorMessage="이름을 입력해주세요." />)
  .add('autoFocus 예제', () => <Input name="name" label="이름" autoFocus />);
