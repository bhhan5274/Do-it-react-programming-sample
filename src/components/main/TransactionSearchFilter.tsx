import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Form, { FormContext } from '../../ui/Form';
import InlineList from '../../ui/InlineList';
import Text from '../../ui/Text';
import Select from '../../ui/Select';
import Option from '../../ui/Option';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { transactionActions } from '../../actions/transactionActions';

export interface TransactionSearchFilterProps extends RouteComponentProps {
  initValues?: any;
  TransactionActions?: typeof transactionActions;
  setFilter?: any;
}

const TransactionSearchFilter: FC<TransactionSearchFilterProps> = ({
  initValues = {},
  TransactionActions,
  setFilter,
  history,
}) => {
  const handleSubmit = (params: any) => {
    const cleanedParams = Object.entries(params)
      .filter(([key, value]) => value !== '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const queryString = Object.entries(cleanedParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    history.push(`/?${queryString}`);
  };

  return (
    <Form onSubmit={handleSubmit} initValues={initValues}>
      <FormContext.Consumer>
        {({ onChange, values }) => (
          <InlineList spacingBetween={2} verticalAlign="bottom">
            <Text xlarge bold>
              검색
            </Text>
            <Select name="code" label="코인 코드" onChange={onChange} value={values.code}>
              <Option label="선택해주세요" value="" />
              <Option label="비트코인(BTX)" value="BTX" />
              <Option label="이더리움(ETH)" value="ETH" />
              <Option label="두잇코인(DOIT)" value="DOIT" />
            </Select>
            <Input name="currentPrice_gte" label="최소 거래가" onChange={onChange} value={values.currentPrice_gte} />
            <Input name="currentPrice_lte" label="최대 거래가" onChange={onChange} value={values.currentPrice_lte} />
            <Button type="submit" primary>
              검색
            </Button>
          </InlineList>
        )}
      </FormContext.Consumer>
    </Form>
  );
};

export default withRouter(TransactionSearchFilter);
