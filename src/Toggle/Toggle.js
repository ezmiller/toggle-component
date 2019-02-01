import React, { Component } from 'react';
import styles from './Toggle.module.css';

class Toggle extends Component {
  static defaultProps = {
    initialOn: false,
  }

  initialState = {
    on: this.props.initialOn,
  }

  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  reset = () => this.setState(this.initialState);

  toggle = () => this.setState({ on: !this.state.on })

  render() {
    const { on } = this.state;

    return (
      <div className={styles.toggle} onClick={this.toggle}>
        <div className={on ? styles.toggle__box_on : styles.toggle__box_off}>
        <div className={
          on ? styles.toggle__switch_on : styles.toggle__switch_off
        } />
        </div>
      </div>
    );
  }
}

export default Toggle;
