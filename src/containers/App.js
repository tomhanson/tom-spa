import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import connectWithTransitionGroup from 'connect-with-transition-group';
import * as actionCreators from '../actions/actionCreators';

//css
// import fonts from '../styles/fonts/fonts.scss';
import css from '../assets/styles/main.css';

import Main from './Main';

function mapStateToProps(state) {
    const { posts, loading, pages, navigation } = state;
    return {
        posts,
        loading,
        pages,
        navigation
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
const app = connectWithTransitionGroup(connect(mapStateToProps, mapDispatchToProps)(Main));

export default app;
