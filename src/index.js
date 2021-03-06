import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss.scss'
import { Provider } from 'react-redux';
import { store } from './store/store'
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
    </Provider>,
  document.getElementById("root")
);
