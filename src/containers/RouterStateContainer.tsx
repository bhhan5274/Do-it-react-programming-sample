import React, { FC, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';

export interface RouterStateContainerProps extends RouteComponentProps {
  setLocation?: any;
}

const RouterStateContainer: FC<RouterStateContainerProps> = ({ setLocation, location }) => {
  useEffect(() => {
    setLocation(location);
  }, [location]);

  return null;
};

export default connect(null, { setLocation })(withRouter(RouterStateContainer));
