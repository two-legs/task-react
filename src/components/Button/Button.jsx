import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';

import classNames from 'classnames/bind';
import styles from './Button.css';
const cx = classNames.bind(styles);

class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
  }

  render() {
    const { size } = this.props;

    return (
      <button className={cn({ size })}>{this.props.children}</button>
    );
  }
}

export default Button;