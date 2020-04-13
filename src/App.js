import React, { useState } from 'react';
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

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
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
  );
}

export default App;
