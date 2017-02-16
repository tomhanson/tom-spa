import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './Store';

//view components
import App from '../containers/App';
import Home from '../containers/Home';
import projects from '../containers/Projects';
import Contact from '../containers/Contact';
import page from '../containers/Page';
import notFound from '../containers/NotFound';

const Routes = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home } />
                <Route path="about" component={ page } />
                <Route path="projects" component={ projects } />
                <Route path="contact" component={ Contact } />
                <Route path="posts" component={ page } />
                <Route path="projects/:postID" component={ page } />
                <Route path="*" component={ notFound } />
            </Route>
        </Router>
    </Provider>

);

export default Routes;