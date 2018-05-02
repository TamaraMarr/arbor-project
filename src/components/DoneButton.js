import React, { Component, Fragment } from 'react';

import styles from './DoneButton.scss';

export default class DoneButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className={`col-4 btn ${styles.button}`} type="button" value="Done" />
        )
    }
}