import React, { Component } from 'react';

import styles from './ResetButton.scss';

export default class ResetButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input className={`col-4 btn ${styles.button}`} type="button" value="Reset" onClick={this.props.resetData} />
        )
    }
}