import React, { Component } from 'react';

import StudentCard from 'Components/StudentCard';

import students from '../data/students';

import styles from './MainPage.scss';

export default class MainPage extends Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                {students.map((student) => {
                    return <StudentCard studentInfo={student} key={student.id} />
                })}
                </div>
            </main>
        )
    }
}