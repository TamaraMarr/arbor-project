import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import First from 'Components/First';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <First />
            </Fragment>
        )
    }
}
