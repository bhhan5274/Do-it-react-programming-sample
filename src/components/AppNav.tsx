import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Heading from '../ui/Heading';
import { ModalContext } from '../context';
import Button from '../ui/Button';
import { REGISTER_USER_MODAL } from '../constants/modals';

export const HEIGHT = 64;

const AppNav: FC = () => {
  return (
    <DivWrapper>
      <DivContainer>
        <Heading level={3} inverse>
          두잇 코인 거래소
        </Heading>
        <ModalContext.Consumer>
          {({ openModal }) => <Button onPress={() => openModal(REGISTER_USER_MODAL)}>회원 가입</Button>}
        </ModalContext.Consumer>
      </DivContainer>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${HEIGHT - 4}px;
    background-color: ${theme.color.primary};
  `}
`;

const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.unit * 2}px;
  `}
`;

export default AppNav;
