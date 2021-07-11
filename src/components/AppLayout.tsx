import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import AppNav, { HEIGHT } from './AppNav';

const AppLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <AppNav />
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${HEIGHT}px;
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.unit * 4}px;
  `}
`;

export default AppLayout;
