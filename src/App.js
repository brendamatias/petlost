import React, { useState } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

import { ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

import SwitchTheme from '~/components/SwitchTheme';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

const pubnub = new PubNub({
  publishKey: 'pub-c-8651ef22-de4e-46af-b47e-a86ff57db996',
  subscribeKey: 'sub-c-5c617f66-7559-11eb-891a-4a1716f71c5a',
  uuid: 'sec-c-OTVmMGQ0YzYtNzU1NC00MWRmLWE4NzUtODkwNTg1OTFiNDgy',
});

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <PubNubProvider client={pubnub}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <Routes />
              <GlobalStyle />
              <SwitchTheme toggleTheme={toggleTheme} />
              <ToastContainer autoClose={3000} />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </PubNubProvider>
  );
}

export default App;
