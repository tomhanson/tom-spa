import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

//1. worker saga
const BASEURL = 'http://tom.dev/wp-json';

const OPTIONS = `${BASEURL}/acf/v2/options`;

const getPosts = state => state.posts;


//use one function for all calls and conditionally choose which one.
export function *shouldFetchDataAsync(action) {
    if(action.i === 1) {
        shouldFetchPostsAsync(action);
    } else {
        alert('not 2');
    }

}

export function *shouldFetchPostsAsync(action) {
    console.log('i ran');
    try {
        //get my current posts from store
        const posts = yield select(getPosts);
        if(posts.length <= 1) {
            // const response = yield call(axios.get, `${BASEURL}/wp/v2/posts?per_page=8`);
            const response = yield call(axios.get, `${BASEURL}/wp/v2/projects?per_page=8&orderby=menu_order&order=desc`);
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
            // concatenate both arrays and then filter them for only unique ones
            response.data = arrayUnique(posts.concat(response.data));
            yield put({type: 'FETCH_POSTS_SUCCEEDED', response})
        } else {
            yield put({type: 'TOGGLE_LOADER'})
        }
    } catch(e) {
        console.log(e);
    }
}
//check for current post information
export function *shouldFetchPostAsync(action) {
    try {
        //get my current posts from store
        const posts = yield select(getPosts);
        let response;
        //check if the post slug I am requested is in the store already
        if(posts.length) {
            response = posts.filter( (item) => {
               if(item.slug === action.postID) {
                   return item;
               }
               return false;
            });
            yield put({type: 'TOGGLE_LOADER', response})
        } else {
            response = yield call(axios.get, `${BASEURL}/wp/v2/projects?slug=${ action.postID }`);
            function arrayUnique(array) {
                let a = array.concat();
                for(let i=0; i<a.length; ++i) {
                    for(let j=i+1; j<a.length; ++j) {
                        if(a[i] === a[j])
                            a.splice(j--, 1);
                    }
                }
                return a;
            }
            // concatenate both arrays and then filter them for only unique ones
            response.data = arrayUnique(posts.concat(response.data));

            yield put({type: 'FETCH_POSTS_SUCCEEDED', response})
        }

    } catch(e) {
        console.log('e', e);
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

export function *watchShouldFetchPosts() {
    yield takeEvery('FETCH_POSTS', shouldFetchPostsAsync)
}
export function *watchshouldFetchPost() {
    yield takeEvery('SHOULD_FETCH_POST', shouldFetchPostAsync)
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
        watchShouldFetchPosts(),
        watchshouldFetchPost(),
        watchFetchNavigation(),
        watchFetchGlobalData(),
        watchShouldFetchData()
    ]
}