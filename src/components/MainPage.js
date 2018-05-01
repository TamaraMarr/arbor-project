import React, { Component } from 'react';

import StudentCard from 'Components/StudentCard';

import styles from './MainPage.scss';

export default class MainPage extends Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <StudentCard />
                </div>
            </main>
        )
    }
}