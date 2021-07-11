import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeCoinPage from '../../components/main/TradeCoinPage';
import { transactionActions } from '../../actions/transactionActions';
import { transactionCreateLoadingStateSelector } from '../../selectors/transactionSelectors';

export default connect(
  (state: any) => ({
    loading: transactionCreateLoadingStateSelector(state),
  }),
  (dispatch) => ({
    TransactionActions: bindActionCreators(transactionActions, dispatch),
  }),
)(TradeCoinPage);
