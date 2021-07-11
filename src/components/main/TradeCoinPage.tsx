import React, { FC } from 'react';
import { ModalContext } from '../../context';
import Form, { FormContext } from '../../ui/Form';

import Spacing from '../../ui/Spacing';
import Text from '../../ui/Text';
import Input from '../../ui/Input';
import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';
import { currentDateTimeToString } from '../../constants/utils';
import { transactionActions } from '../../actions/transactionActions';

export interface TradeCoinPageProps {
  name?: string;
  type?: string;
  price?: string;
  code?: string;
  loading?: boolean;
  TransactionActions?: typeof transactionActions;
}

const TradeCoinPage: FC<TradeCoinPageProps> = ({ loading, TransactionActions, code, name, price, type }) => {
  const handleSubmit = (values: any, closeModal: any) => {
    const formValues = {
      ...values,
      code,
      name,
      datetime: currentDateTimeToString(),
    };

    TransactionActions?.createTransactionFromReduxPack(formValues, closeModal);
  };
  const typeName = type === 'sell' ? '판매' : '구매';

  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <Form onSubmit={(values: any) => handleSubmit(values, closeModal)} initValues={{ currentPrice: price }}>
          <FormContext.Consumer>
            {({ onChange, values }) => (
              <Spacing horizontal={4} vertical={4}>
                <Text xlarge bold>
                  {name} {typeName}
                </Text>
                <Spacing bottom={2}>
                  <Input name="currentPrice" label="금액" value={values.currentPrice} onChange={onChange} />
                </Spacing>
                <Spacing bottom={2}>
                  <Input name="amount" label="수량" value={values.amount} onChange={onChange} />
                </Spacing>
                <InlineList spacingBetween={1}>
                  <Button primary disabled={loading}>
                    {typeName}
                  </Button>
                  <Button onPress={closeModal} disabled={loading}>
                    취소
                  </Button>
                </InlineList>
              </Spacing>
            )}
          </FormContext.Consumer>
        </Form>
      )}
    </ModalContext.Consumer>
  );
};

export default TradeCoinPage;
