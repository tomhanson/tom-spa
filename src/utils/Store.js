import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

//root reducer

import rootReducer from '../reducers/index';

// const client = axios.create({ //all axios can be used, shown in axios documentation
//     baseURL:'http://admin.learningjs.co.uk/wp-json/wp/v2/',
//     responseType: 'json'
// });

const defaultState = {
    posts: [],
    loading: true,
    pages: [],
    navigation: {
        items: [],
        open: false
    }
};

//router middleware
const reduxMiddleware = routerMiddleware(browserHistory);

const sagaMiddleware = createSagaMiddleware();

const middleware = [reduxMiddleware, sagaMiddleware];

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;


