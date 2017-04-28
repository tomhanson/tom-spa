
export function shouldFetchProjects(...payload) {
    return {
        type: 'SHOULD_FETCH_PROJECTS',
        payload
    }
}
export function shouldFetchPage(slug, toggleLoader=false) {
    return {
        type: 'SHOULD_FETCH_PAGE',
        slug,
        toggleLoader
    }
}
export function shouldFetchCurrentProject(postID) {
    return {
        type: 'SHOULD_FETCH_PROJECT',
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
export function fetchGlobalData() {
    return {
        type: 'FETCH_GLOBAL_DATA'
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

export function shouldFetchData(...payload) {
    return  {
        type: 'FETCH_DATA',
        payload
    }
}