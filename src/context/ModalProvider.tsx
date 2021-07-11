import React, { FC, useState } from 'react';
import Modal from '../ui/Modal';
import { ModalContext } from './index';

export interface ModalProviderProps {
  contentMap?: any;
}

const ModalProvider: FC<ModalProviderProps> = ({ contentMap, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [contentId, setContentId] = useState('');
  const [modalProps, setModalProps] = useState({});

  const handleOpen = (id: string, props: any) => {
    setContentId(id);
    setModalProps(props);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const ModalContent = contentMap[contentId];

  return (
    <ModalContext.Provider
      value={{
        openModal: handleOpen,
        closeModal: handleClose,
      }}
    >
      {children}
      {showModal && ModalContent && (
        <Modal>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ModalContent {...modalProps} />
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
