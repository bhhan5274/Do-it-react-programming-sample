import React, { FC, useEffect } from 'react';
import TransactionTable, { Transaction } from './TransactionTable';
import Heading from '../../ui/Heading';
import Card from '../../ui/Card';
import { transactionActions } from '../../actions/transactionActions';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

export interface TransactionListProps {
  transactions?: Transaction[];
  loading?: boolean;
  TransactionActions?: typeof transactionActions;
}

const TransactionList: FC<TransactionListProps> = ({ TransactionActions, transactions, loading }) => {
  return (
    <div>
      <Heading level={3}>거래 현황</Heading>
      <Card vertical={4} horizontal={4}>
        <TransactionSearchFilterContainer />
      </Card>
      <TransactionTable transactions={transactions} isLoading={loading} />
      <TransactionPaginationContainer />
    </div>
  );
};

export default TransactionList;
