// import path from 'path'
// import Express from 'express';
// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import defaultState from '../src/utils/Store';
// import App from '../src/containers/App';
//
//
// import { renderToString } from 'react-dom/server'
//
// const app = Express();
// const port = 3000;
//
// //Serve static files
// app.use('/static', Express.static('static'));
//
// // This is fired every time the server side receives a request
// app.use(handleRender);
//
// app.listen(port);
//
//
// function handleRender(req, res) {
//     // Create a new Redux store instance
//     const store = createStore(defaultState);
//
//     // Render the component to a string
//     const html = renderToString(
//         <Provider store={store}>
//             <App />
//         </Provider>
//     );
//
//     // Grab the initial state from our Redux store
//     const preloadedState = store.getState();
//
//     // Send the rendered page back to the client
//     res.send(renderFullPage(html, preloadedState))
// }
//
//
// function renderFullPage(html, preloadedState) {
//     return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Universal Example</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
//         </script>
//         <script src="/static/bundle.js"></script>
//       </body>
//     </html>
//     `
// }

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;