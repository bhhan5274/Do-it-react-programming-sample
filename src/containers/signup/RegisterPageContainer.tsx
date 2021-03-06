import { connect } from 'react-redux';
import RegisterPage from '../../components/signup/RegisterPage';
import { createUser } from '../../actions/userActions';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';

export default connect(
  (state: any) => {
    userCreateLoadingStateSelector(state);
  },
  { createUser },
)(RegisterPage);
