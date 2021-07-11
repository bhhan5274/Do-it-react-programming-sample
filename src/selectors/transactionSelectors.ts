import createSelectors from './createSelectors';

export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');
