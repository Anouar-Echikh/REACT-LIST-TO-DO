import React, { Component } from "react";
import Header from "./header";
import List from "./list";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  getTextFromChild = text => {
    this.setState({ text: text });
  };
  render() {
    return (
      <div className="app">
        <Header getTextFromChild={text => this.getTextFromChild(text)} />
        <List text={this.state.text} />
      </div>
    );
  }
}

export default App;
