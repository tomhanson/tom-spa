function loading(state = [], action) {
    switch(action.type){
        case 'TOGGLE_LOADER':
            return !state;
        case 'FETCH_POSTS_SUCCEEDED':
            //update multiple at once using parameters given
            return !state;
        case 'LOADER_ON':
            //update multiple at once using parameters given
            return true;
        default:
            return state;
    }
}
export default loading;