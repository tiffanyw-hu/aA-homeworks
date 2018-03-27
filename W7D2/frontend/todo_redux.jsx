import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log(store.dispatch(action));
  console.log(store.getState());
};

const applyMiddleWares = store => next => action => {
  let dispatch = store.dispatch;
  dispatch.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
    return Object.assign({}, store, {dispatch})
  })
};
