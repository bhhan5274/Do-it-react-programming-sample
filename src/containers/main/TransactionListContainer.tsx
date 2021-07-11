import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transactionActions } from '../../actions/transactionActions';
import TransactionList from '../../components/main/TransactionList';
import { transactionListSelector, transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

export default connect(
  (state: any) => ({
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  }),
  (dispatch) => ({
    TransactionActions: bindActionCreators(transactionActions, dispatch),
  }),
)(TransactionList);
