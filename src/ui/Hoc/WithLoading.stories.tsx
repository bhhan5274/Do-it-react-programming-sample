import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import WithLoading from './WithLoading';

const SampleComponent: FC = () => {
  return <div>Hello World</div>;
};

const WithLoadingComponent = WithLoading()(SampleComponent);

storiesOf('Doit-UI/WithLoading', module)
  .add('로딩중 O', () => <WithLoadingComponent isLoading />)
  .add('로딩중 X', () => <WithLoadingComponent />);
