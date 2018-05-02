import React, { Component, Fragment } from 'react';

import styles from './StudentCard.scss';

export default class StudentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const present = this.props.studentInfo.attendanceMark.present;
        const late = this.props.studentInfo.attendanceMark.late;
        const absent = this.props.studentInfo.attendanceMark.absent;

        return (
            <div className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.wrapper}`}>
                <div className={styles.studentCard}>
                    <img src={require(`${this.props.studentInfo.image}`)} alt="Student" className={styles.studentImage} />
                    <div className={styles.statusDiv}>
                        {!present && !late && !absent
                            ? <Fragment>
                                <i className={`fas fa-check ${styles.grey}`}></i>
                                <i className={`fas fa-stopwatch ${styles.grey}`}></i>
                                <i className={`fas fa-times ${styles.grey}`}></i>
                              </Fragment>
                            : ""}
                        {present && <div className={styles.status}><i className={`fas fa-check ${styles.green}`}></i><span>Present</span></div>}
                        {late && <div className={styles.status}><i className={`fas fa-stopwatch ${styles.orange}`}></i><span>Late</span></div>}
                        {absent && <div className={styles.status}><i className={`fas fa-times ${styles.red}`}></i><span>Absent</span></div>}
                    </div>
                </div>
            </div>
        )
    }
}