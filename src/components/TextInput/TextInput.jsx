import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import styles from './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value || '' };
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  }

  render() {
    return (
      <div className={styles.textInput}>
        <input
          type="text"
          className={styles.input}
          value={this.state.value}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
        />
        <Icon name="return" className={styles.inputIcon} />
      </div>
    );
  }
}

export default TextInput;