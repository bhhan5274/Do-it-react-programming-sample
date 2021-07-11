import React, { FC } from 'react';
import Heading from '../../ui/Heading';
import InlineList from '../../ui/InlineList';
import CoinDashlet from './CoinDashlet';

const CoinOverview: FC = () => {
  return (
    <>
      <Heading level={3}>코인 동향</Heading>
      <InlineList>
        <CoinDashlet name="비트코인(BTX)" priceLabel="4216000" code="BTX" />
        <CoinDashlet name="이더리움(ETH)" priceLabel="216000" code="ETH" />
        <CoinDashlet name="두잇코인(DOIT)" priceLabel="25000" code="DOIT" />
      </InlineList>
    </>
  );
};

export default CoinOverview;
