import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }

  handleClick = () => {
    this.setState(state => {
      state.backgroundColor = this.props.selectedColor;
      return state;
    });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={() => {
          this.handleClick();
        }}
      />
    );
  }
}
