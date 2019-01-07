import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  getText = e => {
    this.setState({ text: e.target.value });
  };
  addToList = () => {
    this.props.getTextFromChild(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="header-container">
        <h1>LOGO</h1>
        <input type="text" value={this.state.text} onChange={this.getText} />
        <button onClick={this.addToList}>Add+</button>
      </div>
    );
  }
}

export default Header;
