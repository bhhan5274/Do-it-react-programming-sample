import React, { FC } from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Modal: FC = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContainer>
          <Card vertical={2} horizontal={2}>
            {children}
          </Card>
        </ModalContainer>
      </ModalWrapper>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  vertical-align: middle;
`;

const ModalContainer = styled.div`
  margin: 40px auto 0;
  width: 700px;
`;

export default Modal;
