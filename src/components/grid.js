import React, { Component } from "react";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: [25, 25],
    };

    this.handleCol = this.handleCol.bind(this);
    this.handleRow = this.handleRow.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.gameGrid = this.gameGrid.bind(this);
  }

  handleCol(e) {}

  handleRow(e) {}

  gameGrid() {}

  start() {}

  stop() {}

  run() {}
  render() {
    return (
      <div className="GridContainer">
        <div>{this.gameGrid()}</div>
        <label className="inputLabel">
          Rows:
          <input value={this.state.gridSize[0]} onChange={this.handleRow} />
        </label>
        <label className="inputLabel">
          Colums:
          <input value={this.state.gridSize[1]} onChange={this.handleCol} />
        </label>
        <h2>Generation:</h2>
        <div className="buttonContainer">
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}
