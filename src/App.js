import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "Components/Header";
import Footer from "Components/Footer";
import MainPage from "Pages/MainPage";

import styles from "./App.css";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                    </Switch>
                </main>
                <Footer />  
            </Fragment>
        )
    }
}
