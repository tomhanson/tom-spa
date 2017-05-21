function pages(state = [], action) {
    switch(action.type){

        case 'FETCH_PAGE_SUCCEEDED':
            let newState = {};
            action.response.data.map(item => {
                return newState[item.slug] = item;
            });
            return Object.assign({}, state, newState);
        default:
            return state;
    }
}
export default pages;


