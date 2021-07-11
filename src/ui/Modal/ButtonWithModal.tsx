import React, { FC, useState } from 'react';
import Button from '../Button';
import Modal from './index';
import Text from '../Text';

const ButtonWithModal: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onPress={() => setShowModal(true)}>삭제</Button>
      {showModal && (
        <Modal>
          <div>
            <Text>정말로 삭제 하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={() => setShowModal(false)}>닫기</Button>
        </Modal>
      )}
    </>
  );
};

export default ButtonWithModal;
