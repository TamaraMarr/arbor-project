import React, { Component } from 'react';

import styles from './InfoBox.scss';

export default class InfoBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            present: 0,
            late: 0,
            absent: 0,
            unmarked: 0
        }
    }

    componentDidMount() {
        this.calculateInfo();
    }

    componentWillReceiveProps() {
        this.calculateInfo();
    }

    calculateInfo = () => {
        let present = 0,
            late = 0,
            absent = 0,
            unmarked = 0;

        this.props.info.forEach((student) => {
            if (student.attendanceMark.present) {
                present++;
            } else if (student.attendanceMark.late) {
                late++;
            } else if (student.attendanceMark.absent) {
                absent++;
            } else {
                unmarked++;
            }
        })

        this.setState({
            present,
            late,
            absent,
            unmarked
        })
    }

    render() {
        return (
            <div className={`col-5 ${styles.wrapper}`}>
                <p>Present: {this.state.present}</p>
                <p>Late: {this.state.late}</p>
                <p>Absent: {this.state.absent}</p>
                <p>Unmarked: {this.state.unmarked}</p>
            </div>
        )
    }
}