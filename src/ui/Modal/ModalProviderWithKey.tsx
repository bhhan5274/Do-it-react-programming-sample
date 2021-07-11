import React, { FC } from 'react';
import CreateMemberModalContent from './CreateMemberModalContent';
import DeleteModalContent from './DeleteModalContent';
import ModalProvider from '../../context/ModalProvider';

export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal';
export const CREATE_MEMBER_MODAL = 'create_member_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
};

const ModalProviderWithKey: FC = ({ children }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ModalProvider contentMap={CONTENT_MAP}>{children}</ModalProvider>;
};

export default ModalProviderWithKey;
