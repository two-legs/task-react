import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Button.css';
const cx = classNames.bind(styles);

class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    primary: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const { size, type, className, primary, ...buttonProps } = this.props;

    return (
      <button {...this.buttonProps} className={cx(['button', size, type], className, { primary })} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

const BigButton = props => <Button {...props} size="big">{props.children}</Button>;

const PrimaryButton = props => <Button {...props} primary>{props.children}</Button>;

export default Button;
export { BigButton, PrimaryButton };

