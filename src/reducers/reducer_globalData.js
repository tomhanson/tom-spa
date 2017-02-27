function globalData(state = {}, action) {
    switch(action.type){
        case 'FETCH_GLOBAL_DATA_SUCCEEDED':
            console.log('action', action);
            return action.response.data.acf;
        default:
            return state;
    }
}

export default globalData;