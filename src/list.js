import React, { Component } from "react";
import Item from "./item";
const articles = [
  {
    text: "السلام عليكم و رحمة الله و بركاته"
  }
];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: articles,
      newtab: articles
    };
  }
  // fuction will run automaticaly when it receive props
  componentWillReceiveProps = nextprops => {
    let arr = this.state.newtab.concat(nextprops);
    console.log(arr);
    this.setState({ newtab: arr });
  };
  getIdToRemove = id => {
    this.setState({
      newtab: this.state.newtab.filter((el, index) => index !== id)
    });
  };
  render() {
    //const {getText}=this.props;
    return (
      <div className="list-container">
        {this.state.newtab.map((el, index) => (
          <Item
            key={index}
            id={index}
            el={el}
            getIdToRemove={id => this.getIdToRemove(id)}
          />
        ))}
      </div>
    );
  }
}

export default List;
