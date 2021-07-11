import React, { FC } from 'react';
import { ModalContext } from '../../context';
import Text from '../Text';
import Button from '../Button';

export interface DeleteModalContentProps {
  id?: number;
  name?: string;
}

const DeleteModalContent: FC<DeleteModalContentProps> = ({ id, name }) => {
  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <div>
          <div>
            <Text>{name}을 정말로 삭제 하시겠습니까?</Text>
          </div>
          <Button small primary>
            예
          </Button>
          <Button small onPress={closeModal}>
            닫기
          </Button>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default DeleteModalContent;
