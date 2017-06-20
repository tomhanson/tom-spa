import {createStore, applyMiddleware} from 'redux'
// import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas';

//root reducer

import rootReducer from '../reducers/index';

export const defaultState = {
    projects: [],
    loading: true,
    pages: {},
    navigation: {
        items: [],
        open: false
    },
    globalData: {}
};

//router middleware
// const reduxMiddleware = routerMiddleware(browserHistory);


// // Grab the state from a global variable injected into the server-generated HTML
// const preloadedState = window.__PRELOADED_STATE__
//
// // Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
// const middleware = [reduxMiddleware, sagaMiddleware];

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export const history = browserHistory;
// export const history = syncHistoryWithStore(browserHistory, store);


export default store;


