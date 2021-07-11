import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './index';
import Text from '../Text';
import Button from '../Button';
import ButtonWithModal from './ButtonWithModal';
import ModalProviderWithKey, { CONFIRM_DELETE_MODAL, CREATE_MEMBER_MODAL } from './ModalProviderWithKey';
import { ModalContext } from '../../context';

storiesOf('Doit-UI/Modal', module)
  .add('기본 설정', () => (
    <Modal>
      <div>
        <Text>정말로 삭제 하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .add('ButtonWithModal', () => <ButtonWithModal />)
  .add('ModalProviderWithKey', () => (
    <ModalProviderWithKey>
      <div>
        <Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
        <ModalContext.Consumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CONFIRM_DELETE_MODAL, { id: 1, name: '상품1' })}>모달 열기</Button>
          )}
        </ModalContext.Consumer>
        <ModalContext.Consumer>
          {({ openModal }) => <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원 가입</Button>}
        </ModalContext.Consumer>
      </div>
    </ModalProviderWithKey>
  ));
