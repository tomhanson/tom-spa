import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

//1. worker saga
// const BASEURL = 'http://tom.dev/wp-json';
const BASEURL = 'https:/admin.tom-hanson.co.uk/wp-json';

const OPTIONS = `${BASEURL}/acf/v2/options`;

const getProjects = state => state.projects;
const getPages = state => state.pages;


//function tpo make sure an array is only unique posts

//pas it the first array

function arrayUnique(array) {
    let a = array.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i].id === a[j].id)
                a.splice(j--, 1);
        }
    }
    return a;
}

//use one function for all calls and conditionally choose which one.
// export function *shouldFetchDataAsync(action) {
//     try {
//         //get my current data from the store
//         const projects = yield select(getProjects);
//         const pages = getPages;
//         //destructure the two arrays passed from the action
//         const { payload } = action;
//         //multiple sagas
//         let postData, pageData;
//         if(projects.length <= 7) {
//             postData = yield call(axios.get, `${BASEURL}/wp/v2/${payload[0][0]}${payload[0][1]}${payload[0][3]}`);
//             yield put({
//                 type: `FETCH_PROJECTS_SUCCEEDED`,
//                 response: postData
//             });
//         } else {
//             yield put({type: 'TOGGLE_LOADER'});
//         }
//         //send the data for the home page
//         if(pages !== null && typeof pages === 'object') {
//             pageData = yield call(axios.get, `${BASEURL}/wp/v2/${payload[1][0]}${payload[1][1]}${payload[1][3]}`);
//         } else {
//             pageData = pages;
//         }
//
//         if(pages !== null && typeof pages === 'object') {
//             yield put({
//                 type: `FETCH_PAGES_SUCCEEDED`,
//                 response: pageData
//             });
//         } else {
//             yield put({type: 'TOGGLE_LOADER'});
//         }
//     } catch(e) {
//         console.log('error in should fetch data async saga', e);
//     }
// }
export function *shouldFetchDataAsync(action) {
    try {
        //get my current data from the store
        const projects = yield select(getProjects);
        //destructure the two arrays passed from the action
        const { payload } = action;
        //multiple sagas
        let requestData;
        if(projects.length <= 7) {
            requestData = yield call(axios.get, `${BASEURL}/wp/v2/${payload[0]}${payload[1]}${payload[3]}`);
            yield put({
                type: `FETCH_${ payload[0].toUpperCase() }_SUCCEEDED`,
                response: requestData
            });
        } else {
            yield put({type: 'TOGGLE_LOADER'});
        }
    } catch(e) {
        console.log('error in should fetch data async saga', e);
    }
}

/*

paramater data for the axios calls

1. post type(post, project, page)
2. amount of posts
3. post slug
4. importantly it must allow numerous items at once

 */


export function *shouldFetchProjectsAsync(action) {
    try {
        //get my current data from the store
        const projects = yield select(getProjects);
        //destructure the two arrays passed from the action
        const { payload } = action;
        //multiple sagas
        let requestData;
        if(projects.length <= 7) {
            requestData = yield call(axios.get, `${BASEURL}/wp/v2/${payload[0]}${payload[1]}${payload[3]}`);
            yield put({
                type: `FETCH_PROJECTS_SUCCEEDED`,
                response: requestData
            });
        } else {
            yield put({type: 'TOGGLE_LOADER'});
        }
    } catch(e) {
        console.log('error in should fetch data async saga', e);
    }
}
//check for current post information
export function *shouldFetchProjectAsync(action) {
    //get my current posts from store
    const projects = yield select(getProjects);
    try {
        const projectData = projects.filter( project => {
            if(project.slug === action.postID) return project;
        });
        //check if the post slug I am requested is in the store already
        if(projectData.length !== 0 ) {
            yield put({type: 'TOGGLE_LOADER'});
        } else {
            let response;
            response = yield call(axios.get, `${BASEURL}/wp/v2/projects?slug=${ action.postID }`);
            yield put({type: 'FETCH_PROJECT_SUCCEEDED', response});
        }

    } catch(e) {
        console.log('error in should fetch project aync saga', e);
    }
}
//pages saga
export function *shouldFetchPageAsync(action) {
    //get my current pages from store
    try {
        //get my current pages from the store
        const pages = yield select(getPages);
        //check to see if i have that page slug;
        const requestedPage = pages[action.slug] || undefined;
        let requestData;
        if( requestedPage === undefined ) {
            requestData = yield call(axios.get, `${BASEURL}/wp/v2/pages?slug=[${ action.slug }]`);
            yield put({
                type: `FETCH_PAGE_SUCCEEDED`,
                response: requestData,
                toggleLoader: action.toggleLoader
            });
        } else {
            if(action.toggleLoader) yield put({type: 'TOGGLE_LOADER'});
        }
    } catch(e) {
        console.log('error in should fetch data async saga', e);
    }
}
//get navigation
export function *fetchNavigationAsync(action) {
    try {
        //send for the dynamic navigation
        let response = yield call(axios.get, `${BASEURL}/custom-endpoints/navigation`);
        yield put({type: 'FETCH_NAVIGATION_SUCCEEDED', response})
    } catch(e) {
        console.log(e);
    }
}
//get global data
export function *fetchGlobalDataAsync(action) {
    try {
        //send for the dynamic navigation
        let response = yield call(axios.get, OPTIONS);
        yield put({type: 'FETCH_GLOBAL_DATA_SUCCEEDED', response});

    } catch (e) {
        console.log(e);
    }
}

//2. watcher saga

export function *watchShouldFetchProjects() {
    yield takeEvery('SHOULD_FETCH_PROJECTS', shouldFetchProjectsAsync)
}
export function *watchshouldFetchProject() {
    yield takeEvery('SHOULD_FETCH_PROJECT', shouldFetchProjectAsync)
}
export function *watchshouldFetchPage() {
    yield takeEvery('SHOULD_FETCH_PAGE', shouldFetchPageAsync)
}
export function *watchFetchNavigation() {
     yield takeEvery('FETCH_NAVIGATION', fetchNavigationAsync)
}
export function *watchFetchGlobalData() {
    yield takeEvery('FETCH_GLOBAL_DATA', fetchGlobalDataAsync)
}
export function *watchShouldFetchData() {
    yield takeEvery('FETCH_DATA', shouldFetchDataAsync)
}
//3. root saga - combines other sagas

export default function *rootSaga() {
    yield [
        watchShouldFetchProjects(),
        watchshouldFetchProject(),
        watchshouldFetchPage(),
        watchFetchNavigation(),
        watchFetchGlobalData(),
        watchShouldFetchData()
    ]
}