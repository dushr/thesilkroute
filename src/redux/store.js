import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer 
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(
          routerMiddleware(history)
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
