// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { counterStateType } from '../reducers/counter';
import mySaga from '../sagas';

const history = createBrowserHistory();

function configureStore(initialState?: counterStateType) {
  const router = routerMiddleware(history);

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(sagaMiddleware, router);
  const store = createStore(rootReducer, initialState, enhancer);

  // then run the saga
  sagaMiddleware.run(mySaga);

  return store;
}

export default { configureStore, history };
