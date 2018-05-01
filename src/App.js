import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "Components/Header";
import Footer from "Components/Footer";
import MainPage from "Components/MainPage";

import styles from "./App.scss";

export default class App extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <MainPage />
                <Footer />
            </div>
        )
    }
}
