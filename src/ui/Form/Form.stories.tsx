import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './index';
import FormConsumerExample from './FormConsumerExample';
import FormSubmitButton from './FormSubmitButton';

const validate = ({ name, age, totalAmount }: any) => {
  const errors: any = {};
  if (!name) {
    errors.name = '이름을 입력해야합니다.';
  }

  if (age && age < 18) {
    errors.age = '나이는 18세 이상이어야 합니다.';
  }

  if (!age) {
    errors.age = '나이를 입력해야합니다.';
  }

  if (totalAmount < 500000) {
    errors.totalAmount = '500000원 보단 더 시켜야지!!';
  }

  return errors;
};

storiesOf('Doit-UI/Form', module).add('유효성 검사', () => (
  <Form validate={validate} onSubmit={action('폼 전송')} initValues={{}}>
    <FormConsumerExample name="name" label="이름" />
    <FormConsumerExample name="age" label="나이" />
    <FormConsumerExample name="totalAmount" label="금액" />
    <FormSubmitButton>전송</FormSubmitButton>
  </Form>
));
