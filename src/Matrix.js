import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = { selectedColor: "#F00" };
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getCurrentColor={this.currentMatrixColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  changeColor = (hexColorString) => {
    this.setState({
      selectedColor: hexColorString
    })
  }

  currentMatrixColor = () => {
    return this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector matrixColorChanger={this.changeColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
