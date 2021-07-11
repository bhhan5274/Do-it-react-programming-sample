import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import { defaultTheme } from './theme/theme';
import MainPage from './components/main/MainPage';
import configureStore from './stores';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';
import NotFound from './components/NotFound';
import RouterStateContainer from './containers/RouterStateContainer';

const store = configureStore();

const CoinApp: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default CoinApp;
