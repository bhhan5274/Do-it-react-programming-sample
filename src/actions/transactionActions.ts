import createActions from './createActions';

const PAGE_SIZE = 10;

const { collection, create, reset } = createActions('transactions');

export const requestTransactionListFromReduxPack = (params?: any, _page = 1) => {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트 했습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
    },
  };

  return collection(
    {
      ...params,
      _page,
      _limit: PAGE_SIZE,
    },
    meta,
  );
};

export const createTransactionFromReduxPack = (data: any, onComplete: any) => {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다.',
      error: '거래가 실패했습니다.',
    },
    name: 'transaction',
  };

  return create(data, {}, meta);
};

export const resetTransactionList = () => {
  return reset();
};

export const transactionActions = {
  requestTransactionListFromReduxPack,
  createTransactionFromReduxPack,
  resetTransactionList,
};
