import React, { FC } from 'react';
import ModalProvider from './context/ModalProvider';
import { REGISTER_USER_MODAL, TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPageContainer from './containers/main/TradeCoinPageContainer';
import RegisterPageContainer from './containers/signup/RegisterPageContainer';

const CONTENT_MAP = {
  [TRADE_COIN_MODAL]: TradeCoinPageContainer,
  [REGISTER_USER_MODAL]: RegisterPageContainer,
};

const ModalProviderWithKey: FC = ({ children }) => {
  return <ModalProvider contentMap={CONTENT_MAP}>{children}</ModalProvider>;
};

export default ModalProviderWithKey;
