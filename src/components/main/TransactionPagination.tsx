import React, { FC } from 'react';
import { transactionActions } from '../../actions/transactionActions';
import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';

export interface TransactionPaginationProps {
  hasNext?: boolean;
  pageNumber?: number;
  loading?: boolean;
  TransactionActions?: typeof transactionActions;
  searchParams?: any;
}

const TransactionPagination: FC<TransactionPaginationProps> = ({
  hasNext,
  pageNumber = 1,
  loading,
  TransactionActions,
  searchParams,
}) => {
  const handleNextPress = () => {
    TransactionActions?.requestTransactionListFromReduxPack(searchParams, pageNumber + 1);
  };

  const handlePrevPress = () => {
    TransactionActions?.requestTransactionListFromReduxPack(searchParams, pageNumber - 1);
  };

  return (
    <InlineList align="right">
      <Button secondary disabled={loading || pageNumber <= 1} onPress={handlePrevPress}>
        이전
      </Button>
      <Button primary disabled={loading || !hasNext} onPress={handleNextPress}>
        다음
      </Button>
    </InlineList>
  );
};

export default TransactionPagination;
