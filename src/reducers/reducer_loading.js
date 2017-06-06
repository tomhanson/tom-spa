function loading(state = [], action) {
    switch(action.type){
        case 'TOGGLE_LOADER':
            return !state;
        case 'FETCH_PROJECTS_SUCCEEDED':
            return !state;
        case 'FETCH_PROJECT_SUCCEEDED':
            return !state;
        case 'FETCH_PAGE_SUCCEEDED':
            if(action.toggleLoader) return false;
            return state;
        default:
            return state;
    }
}
export default loading;