//import methods from redux and redux router
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

//reducers
import projects from './reducer_projects';
import loading from './reducer_loading';
import pages from './reducer_pages';
import navigation from './reducer_navigation';
import globalData from './reducer_globalData'

const rootReducer = combineReducers(
    //first one is example to visualise it
    { projects: projects, loading, pages, navigation, globalData }
    // { projects: projects, loading, pages, navigation, globalData, routing: routerReducer }
);
export default rootReducer;