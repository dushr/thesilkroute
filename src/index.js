import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const getInitialState = () => ({});

function renderApp() {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

  const initialState = getInitialState();
  const store = configureStore(browserHistory, initialState);
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
    ),
    document.getElementById('root')
  );
  registerServiceWorker();
}


renderApp();
