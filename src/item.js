import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "article"
    };
  }
  onClickp = e => {
    if (e.target.className === "article")
      this.setState({ class: "article clicked" });
    else this.setState({ class: "article" });
  };
  remove = () => {
    this.props.getIdToRemove(this.props.id);
  };

  render() {
    const { el } = this.props;
    return (
      <div className="item-container">
        <p className={this.state.class} onClick={this.onClickp}>
          {el.text}
        </p>
        <button className="button" onClick={this.remove}>
          Remove
        </button>
      </div>
    );
  }
}

export default Item;
