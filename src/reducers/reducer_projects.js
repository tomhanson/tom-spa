import uniqueArrayCheck from '../utils/uniqueArrayCheck';

function projects(state = [], action) {

    switch(action.type){

        case 'FETCH_PROJECTS_SUCCEEDED':
            const filteredProjects = uniqueArrayCheck( action.response.data.concat(state) );

            return [...filteredProjects];
        case 'FETCH_PROJECT_SUCCEEDED':
            return [...state, ...action.response.data];
        default:
            return state;
    }
}
export default projects;