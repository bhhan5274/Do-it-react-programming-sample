import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Spacing from '../Spacing';
import Text from '../Text';

export interface ToastProps {
  warning?: boolean;
  message?: string;
}

const Toast: FC<ToastProps> = ({ message, warning }) => {
  return (
    <ToastOuterDiv>
      <ToastInnerDiv warning={warning}>
        <Spacing vertical={4} horizontal={4}>
          <Text inverse bold>
            {message}
          </Text>
        </Spacing>
      </ToastInnerDiv>
    </ToastOuterDiv>
  );
};

const ToastOuterDiv = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: ${theme.unit * 4}px;
  `}
`;

const ToastInnerDiv = styled.div<ToastProps>`
  ${({ theme, warning }) => css`
    border-radius: ${theme.unit}px;
    padding: ${theme.unit * 2}px ${theme.unit * 4}px;
    margin-bottom: ${theme.unit * 4}px;
    background-color: ${warning ? theme.color.error : theme.color.secondary};
  `}
`;

export default Toast;
