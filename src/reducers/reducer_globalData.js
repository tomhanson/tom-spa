function globalData(state = {}, action) {
    switch(action.type){
        case 'FETCH_GLOBAL_DATA_SUCCEEDED':
            return action.response.data.acf;
        default:
            return state;
    }
}

export default globalData;