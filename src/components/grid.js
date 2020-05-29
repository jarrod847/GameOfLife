import React, { Component } from "react";
import Logic from "./logic";
import GameCell from "./cell";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logic: new Logic(),
      gridSize: [25, 25],
      gameRunning: false,
      interval: 150,
    };

    this.handleCol = this.handleCol.bind(this);
    this.handleRow = this.handleRow.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.gameGrid = this.gameGrid.bind(this);
    this.storeCell = this.storeCell.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  storeCell(spot) {
    if (!this.state.gameRunning) {
      this.setState({
        logic: this.state.logic.storeCell(spot),
      });
    }
  }

  editInterval = (event) => {
    if (!this.state.gameRunning) {
      this.setState({
        interval: event.target.value,
      });
    }
  };

  handleCol(e) {
    if (!this.state.gameRunning) {
      let size = this.state.gridSize;

      if (e.target.value <= 50) size[0] = e.target.value;
      else size[0] = 25;

      this.setState({ gridSize: size });

      this.gameGrid();
    }
  }

  handleRow(e) {
    if (!this.state.gameRunning) {
      let size = this.state.gridSize;

      if (e.target.value <= 50) size[1] = e.target.value;
      else size[1] = 25;

      this.setState({ gridSize: size });

      this.gameGrid();
    }
  }

  handleClear() {
    if (!this.state.gameRunning) {
      window.location.reload(false);
    }
  }

  gameGrid() {
    var newGrid = [];
    var cells = [];

    for (var i = 0; i < this.state.gridSize[0]; i++) {
      for (var j = 0; j < this.state.gridSize[1]; j++) {
        if (this.state.logic.isAlive(i + " , " + j)) {
          cells.push(
            <GameCell
              key={[i, j]}
              spot={{ x: i, y: j }}
              live={true}
              storeCell={this.storeCell.bind(this)}
            />
          );
        } else {
          cells.push(
            <GameCell
              key={[i, j]}
              spot={{ x: i, y: j }}
              live={false}
              storeCell={this.storeCell.bind(this)}
            />
          );
        }
      }
      newGrid.push(
        <div className="row" key={i}>
          {cells}
        </div>
      );
      cells = [];
    }

    return newGrid;
  }

  start() {
    if (!this.state.gameRunning) {
      this.setState(
        {
          gameRunning: true,
        },
        () => {
          this.intervalRef = setInterval(() => this.run(), this.state.interval);
        }
      );
    }
  }

  stop() {
    this.setState(
      {
        gameRunning: false,
      },
      () => {
        if (this.intervalRef) {
          clearInterval(this.intervalRef);
        }
      }
    );
  }

  run() {
    this.setState({
      logic: this.state.logic.newGeneration(),
    });
  }
  render() {
    return (
      <div>
        <h2 className="title">Generation:{this.state.logic.get()}</h2>
        <div className="GridContainer">{this.gameGrid()}</div>
        <div className="GridInputs">
          <div className="labels">
            <label className="inputLabel">
              Rows:
              <input
                className="input"
                value={this.state.gridSize[1]}
                onChange={this.handleRow}
              />
            </label>
            <label className="inputLabel">
              Colums:
              <input
                className="input"
                value={this.state.gridSize[0]}
                onChange={this.handleCol}
              />
            </label>
            <label className="inputLabel">
              {" "}
              Speed:
              <input
                className="input"
                value={this.state.interval}
                onChange={this.editInterval}
              />
            </label>
          </div>
          <div className="buttonContainer">
            <button
              className="buttons"
              onClick={this.start}
              onTouchStart={this.start}
            >
              Start
            </button>
            <button
              className="buttons"
              onClick={this.stop}
              onTouchStart={this.stop}
            >
              Stop
            </button>
            <button className="buttons" onClick={this.handleClear}>
              Clear
            </button>
          </div>
        </div>
        <div className="title">Created by Jarrod Skahill</div>
      </div>
    );
  }
}
