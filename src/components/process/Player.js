import React, { Component } from "react";

import Controls from "../interface/Controls/Controls";
import { Details, Seekbar } from "../interface/Details/Details";
import State from "../../data/State";

/**
 * Player is a stateful component which handles the main screen of the application.
 * It wraps Details and Controls components to show the detail of the song 
 * currently playing and go to other songs in the songs list.
 */
class Player extends Component {
  constructor(props) {
    super(props);

    // state of the component
    this.state = State;
  }

  render() {
    return (
      <div className="container">
        <Details track={this.state.songsList[this.state.currentIndex]} />
        <Controls />
      </div>
    );
  }
}

export default Player;