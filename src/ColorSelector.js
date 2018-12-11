import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={str} onClick={this.handleClick} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (e) => {
    const hexColorString = e._targetInst.key
    this.props.matrixColorChanger(hexColorString)
  }
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
