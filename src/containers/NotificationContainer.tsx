import { connect } from 'react-redux';
import Notification from '../components/Notification';
import { State } from '../reducers';

export default connect((state: State) => {
  const { showMessage, message, warning } = state.notification;
  return { showMessage, message, warning };
})(Notification);
