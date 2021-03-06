import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from './ButtonSwitcher.css';

class ButtonSwitcher extends PureComponent {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    onSwitch: PropTypes.func,
    buttonType: PropTypes.string,
  };

  constructor(props) {
    super(props);

    const { buttons } = this.props;
    this.state = {
      activeButtonId: buttons && buttons.length > 0 && buttons[0].id,
    };
  }

  handleClick = (button, event) => {
    if (this.state.activeButtonId !== button.id) {
      this.setState({
        activeButtonId: button.id,
      });
      if (this.props.onSwitch) this.props.onSwitch(button, event);
    }
  };

  render() {
    const { buttons } = this.props;
    if (!buttons) return null;

    return (
      <div className={styles.buttonSwitcher}>
        {buttons.map(button => (
          <Button
            key={button.id}
            primary={button.id === this.state.activeButtonId}
            onClick={event => this.handleClick(button, event)}
            className={styles.switchButton}
            type={this.props.buttonType}
          >
            {button.caption}
          </Button>
        ))}
      </div>
    );
  }
}

export default ButtonSwitcher;
