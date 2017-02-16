function navigation(state=[], action) {
    switch(action.type){
        case 'FETCH_NAVIGATION_SUCCEEDED':
            const nav = [];
            //make an array of the name and slug so it is formatted properly and easy to use
            action.response.data.map( (item)=> {
                return (
                    nav.push({
                        name : item,
                        slug : item.replace(/ /g,"-").toLowerCase()
                    })
                )

            });
            const ew = [];
            ew.push(nav);
            return Object.assign({}, state, {
                items: nav
            });

        case 'TOGGLE_NAVIGATION':
            console.log(action);
            return Object.assign({}, state, {
               open : !state.open
            });
        default:
            return state;
    }
}

export default navigation;