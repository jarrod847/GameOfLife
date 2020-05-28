import React, { Component } from "react";
import GameCell from "./cell";

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

  gameGrid() {
    let newGrid = [];
    let cells = [];

    for (let x = 0; x < this.state.gridSize[0]; x++) {
      for (let y = 0; y < this.state.gridSize[1]; y++) {
        cells.push(<GameCell key={[x, y]} />);
      }
      newGrid.push(<div key={x}>{cells}</div>);
      cells = [];
    }
    return newGrid;
  }

  start() {}

  stop() {}

  run() {}
  render() {
    return (
      <div>
        <h2 className="title">Generation:</h2>
        <div className="GridContainer">{this.gameGrid()}</div>
        <div className="GridInputs">
          <div className="labels">
            <label className="inputLabel">
              Rows:
              <input
                className="input"
                value={this.state.gridSize[0]}
                onChange={this.handleRow}
              />
            </label>
            <label className="inputLabel">
              Colums:
              <input
                className="input"
                value={this.state.gridSize[1]}
                onChange={this.handleCol}
              />
            </label>
          </div>
          <div className="buttonContainer">
            <button className="buttons" onClick={this.start}>
              Start
            </button>
            <button className="buttons" onClick={this.stop}>
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
}
