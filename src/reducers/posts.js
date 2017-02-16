function posts(state = [], action) {
    switch(action.type){
        case 'REQUEST_PAGEDATA_SUCCESS':
            return [...state, ...action.payload.data];
        case 'FETCH_POSTS_SUCCEEDED':
            return [...action.response.data];
        default:
            return state;
    }
}
export default posts;