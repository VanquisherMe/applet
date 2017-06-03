const {createStore, compose, applyMiddleware} = require('./libs/redux.js');

import reducer from './reducers/index.js';


function configureStore() {
  const store = createStore(
    reducer()
  );

  return store;
}
module.exports = configureStore;