//import methods from redux and redux router
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
import posts from './posts';
import loading from './loading';
import pages from './pages';
import navigation from './navigation';

const rootReducer = combineReducers(
    { posts, loading, pages, navigation, routing: routerReducer }
);
export default rootReducer;