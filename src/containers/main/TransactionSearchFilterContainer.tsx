import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transactionActions } from '../../actions/transactionActions';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setFilter } from '../../actions/searchFilterActions';
import { State } from '../../reducers';

export default connect(
  (state: State) => ({
    initValues: state.searchFilter.params,
  }),
  (dispatch) => ({
    TransactionActions: bindActionCreators(transactionActions, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch),
  }),
)(TransactionSearchFilter);
