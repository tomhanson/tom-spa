import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import connectWithTransitionGroup from 'connect-with-transition-group';
import * as actionCreators from '../actions/actionCreators';

//css
import '../assets/styles/main.css';

import Main from './Main';

function mapStateToProps(state) {
    const { projects, loading, pages, navigation, globalData } = state;
    return {
        projects,
        loading,
        pages,
        navigation,
        globalData
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
// const app = connectWithTransitionGroup(connect(mapStateToProps, mapDispatchToProps)(Main));
const app = connect(mapStateToProps, mapDispatchToProps)(Main);

export default app;
