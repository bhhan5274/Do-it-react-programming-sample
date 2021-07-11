import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf('Doit-UI/Heading', module).add('Heading 모음', () => (
  <div style={{ backgroundColor: 'darkcyan' }}>
    <Heading level={1}>Heading1</Heading>
    <Heading level={2}>Heading2</Heading>
    <Heading level={3}>Heading3</Heading>
    <Heading level={4}>Heading4</Heading>
    <Heading level={5}>Heading5</Heading>
    <Heading level={6}>Heading6</Heading>
    <br />
    <Heading level={1} inverse>
      Heading1 inverse
    </Heading>
    <Heading level={2} inverse>
      Heading2 inverse
    </Heading>
    <Heading level={3} inverse>
      Heading3 inverse
    </Heading>
    <Heading level={4} inverse>
      Heading4 inverse
    </Heading>
    <Heading level={5} inverse>
      Heading5 inverse
    </Heading>
    <Heading level={6} inverse>
      Heading6 inverse
    </Heading>
  </div>
));
