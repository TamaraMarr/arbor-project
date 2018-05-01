import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './src/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)