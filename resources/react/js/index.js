import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '@globals/components/errorBoundary';
import { AlertStore } from '@globals/stores';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(fas);

const stores = {
  alertStore: new AlertStore(),
};

ReactDOM.render(
  <ErrorBoundary>
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('react-app'),
);
