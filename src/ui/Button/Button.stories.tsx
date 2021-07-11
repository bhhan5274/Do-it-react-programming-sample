import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import Text from '../Text';

storiesOf('Doit-UI/Button', module).add('모두 보기', () => (
  <div style={{ paddingLeft: 10 }}>
    <h6>
      <Button>전송하기</Button>
      <Text>기본 버튼</Text>
    </h6>
    <h6>
      <Button xlarge>전송하기</Button>
      <Text>xlarge 버튼</Text>
    </h6>
    <h6>
      <Button large>전송하기</Button>
      <Text>large 버튼</Text>
    </h6>
    <h6>
      <Button small>전송하기</Button>
      <Text>small 버튼</Text>
    </h6>
    <h6>
      <Button xsmall>전송하기</Button>
      <Text>xsmall 버튼</Text>
    </h6>
    <h6>
      <Button primary>전송하기</Button>
      <Text>primary 버튼</Text>
    </h6>
    <h6>
      <Button secondary>전송하기</Button>
      <Text>secondary 버튼</Text>
    </h6>
    <h6>
      <Button primary large>
        전송하기
      </Button>
      <Text>primary와 large 함께 쓰는 예제</Text>
    </h6>
  </div>
));
