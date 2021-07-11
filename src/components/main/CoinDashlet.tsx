import React, { FC } from 'react';
import { ModalContext } from '../../context';
import { TRADE_COIN_MODAL } from '../../constants/modals';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';

export interface CoinDashletProps {
  name: string;
  priceLabel: string;
  code: string;
}

const CoinDashlet: FC<CoinDashletProps> = ({ name, priceLabel, code }) => {
  return (
    <ModalContext.Consumer>
      {({ openModal }) => (
        <Card vertical={4} horizontal={4}>
          <Heading level={4}>
            {name}
            <br />
            <Text>{priceLabel}</Text>
          </Heading>
          <InlineList spacingBetween={1}>
            <Button
              primary
              small
              onPress={() => openModal(TRADE_COIN_MODAL, { type: 'buy', name, price: priceLabel, code })}
            >
              매수
            </Button>
            <Button small onPress={() => openModal(TRADE_COIN_MODAL, { type: 'sell', name, price: priceLabel, code })}>
              매도
            </Button>
          </InlineList>
        </Card>
      )}
    </ModalContext.Consumer>
  );
};

export default CoinDashlet;
