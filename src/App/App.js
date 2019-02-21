import React, { Component } from "react";
import Toggle from "../Toggle/Toggle";
import Switch from "../Switch/Switch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ on, toggle, reset }) => {
            return <Switch on={on} onClick={toggle}/>;
          }}
        </Toggle>
      </div>
    );
  }
}

export default App;
