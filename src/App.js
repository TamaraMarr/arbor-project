import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import First from 'Components/First';
import Second from 'Components/Second';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <First />
                <Second />
            </Fragment>
        )
    }
}
