import { Component } from "react";

class Toggle extends Component {
  static defaultProps = {
    initialOn: false
  };

  initialState = {
    on: this.props.initialOn
  };

  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  reset = () => this.setState(this.initialState);

  toggle = () => this.setState({ on: !this.state.on });

  getStateAndHelpers = () => ({
    ...this.state,
    toggle: this.toggle,
    reset: this.reset,
  });

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
