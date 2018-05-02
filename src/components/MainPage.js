import React, { Component, Fragment } from 'react';

import StudentCard from 'Components/StudentCard';
import InfoBox from 'Components/InfoBox';
import DoneButton from 'Components/DoneButton';
import ResetButton from 'Components/ResetButton';

import students from '../data/students';

import styles from './MainPage.scss';

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        this.setState({
            students
        })
    }

    updateData = (event) => {
        let students;
        const clickedIcon = event.target.attributes[0].value;
        const studentId = event.target.attributes[1].value;

        if (clickedIcon.includes('check')) {
            students = this.state.students.map((student) => {
                if (student.id == studentId) {
                    student.attendanceMark.present = true;
                }
                return student;
            });
        }

        if (clickedIcon.includes('stopwatch')) {
            students = this.state.students.map((student) => {
                if (student.id == studentId) {
                    student.attendanceMark.late = true;
                }
                return student;
            });
        }
        
        if (clickedIcon.includes('times')) {
            students = this.state.students.map((student) => {
                if (student.id == studentId) {
                    student.attendanceMark.absent = true;
                }
                return student;
            });
        }

        this.setState({
            students
        })
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    {this.state.students.map((student) => {
                        return <StudentCard studentInfo={student} key={student.id} setStatus={this.updateData} />
                    })}
                </div>
                <div className={styles.bottomSection}>
                    <InfoBox info={this.state.students} />
                    <div className={`col-6 ${styles.buttons}`}>
                        <DoneButton />
                        <ResetButton />
                    </div>
                </div>
            </main>
        )
    }
}