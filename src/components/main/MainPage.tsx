import React, { FC } from 'react';
import CoinOverview from './CoinOverview';
import TransactionListContainer from '../../containers/main/TransactionListContainer';

const MainPage: FC = () => {
  return (
    <>
      <CoinOverview />
      <TransactionListContainer />
    </>
  );
};

export default MainPage;
