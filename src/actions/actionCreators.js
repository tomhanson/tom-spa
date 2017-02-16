
export function shouldFetchPosts() {
    return {
        type: 'FETCH_POSTS'
    }
}
export function shouldFetchCurrentPost(postID) {
    return {
        type: 'SHOULD_FETCH_POST',
        postID
    }
}
export function toggleLoader() {
    return {
        type: 'TOGGLE_LOADER'
    }
}
export function loaderOn() {
    return {
        type: 'LOADER_ON'
    }
}


//navigation actions
export function fetchNavigation() {
    return {
        type: 'FETCH_NAVIGATION'
    }
}
export function toggleNav() {
    return {
        type: 'TOGGLE_NAVIGATION'
    }
}