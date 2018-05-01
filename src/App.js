import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "Components/Header";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
            </Fragment>
        )
    }
}
