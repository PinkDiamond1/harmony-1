import React, { Component } from "react";
import { connect } from "react-redux";

import { Controls } from "../interface/Controls/Controls";
import { Details } from "../interface/Details/Details";

/**
 * Player is a stateful component which handles the main screen of the application.
 * It wraps Details and Controls components to show the detail of the song 
 * currently playing and go to other songs in the songs list.
 */
class Player extends Component {
  render() {
    let currentTrack = this.props.tracks[this.props.currentIndex];
    return (
      <div className="container">
        <Details track={currentTrack} />
        <Controls />
      </div>
    );
  }
}

// mapped properties to the component
const mapStateToProps = state => {
  return {
    tracks: state.tracksList,
    currentIndex: state.currentIndex,
  };
};

export default connect(mapStateToProps)(Player);