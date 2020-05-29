import React, { Component } from "react";

export default class GameCell extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.storeCell(this.props.spot)}
        className={this.props.live ? "cellContainerLive" : "cellContainerDead"}
      ></div>
    );
  }
}
