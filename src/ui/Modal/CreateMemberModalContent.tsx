import React, { FC } from 'react';
import { ModalContext } from '../../context';
import Text from '../Text';
import Input from '../Input';
import Button from '../Button';

const CreateMemberModalContent: FC = () => {
  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <div>
          <div>
            <Text>회원가입</Text>
            <div>
              <Input label="이메일" name="email" />
            </div>
            <div>
              <Input label="이름" name="name" />
            </div>
            <div>
              <Input label="비밀번호" name="password" />
            </div>
          </div>
          <Button small primary>
            가입하기
          </Button>
          <Button small onPress={closeModal}>
            닫기
          </Button>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default CreateMemberModalContent;
