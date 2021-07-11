import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transactionActions } from '../../actions/transactionActions';
import TransactionPagination from '../../components/main/TransactionPagination';
import { transactionListLoadingStateSelector, transactionsSelector } from '../../selectors/transactionSelectors';

export default connect(
  (state: any) => {
    const { pagination, ids } = transactionsSelector(state);
    const { number, size } = pagination;
    const loading = transactionListLoadingStateSelector(state);

    return {
      searchParams: state.searchFilter.params,
      pageNumber: number || 1,
      hasNext: ids.length === size,
      loading,
    };
  },
  (dispatch) => ({
    TransactionActions: bindActionCreators(transactionActions, dispatch),
  }),
)(TransactionPagination);
