import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './Store';

//view components
import App from '../containers/App';
import Home from '../containers/Home';
import projects from '../containers/Projects';
import project from '../containers/Project';
import Contact from '../containers/Contact';
import page from '../containers/Page';
import notFound from '../containers/NotFound';

const Routes = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home } />
                <Route path="about" component={ page } />
                <Route path="my-projects" component={ projects } />
                <Route path="contact" component={ Contact } />
                <Route path="projects/:postID" component={ project } />
                <Route path="*" component={ notFound } />
            </Route>
        </Router>
    </Provider>

);

export default Routes;