import React, { Component } from 'react';
import ColorSelector from './ColorSelector'

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      backgroundColor: props.color
    }
  }

  handleClick = () => {
    this.setState( state => {
      state.backgroundColor = this.props.selectedColor
      return state
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.backgroundColor}} onClick={() => {this.handleClick()}}>
      </div>
    )
  }

}
