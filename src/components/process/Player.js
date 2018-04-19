import React, { Component } from "react";
import { connect } from "react-redux";

import { Controls } from "../interface/Controls/Controls";
import { Details } from "../interface/Details/Details";
import noAlbum from "../../images/no-album.jpg";

/**
 * Player is a stateful component which handles the main screen of the application.
 * It wraps Details and Controls components to show the detail of the song 
 * currently playing and go to other songs in the songs list.
 */
class Player extends Component {
  render() {
    let currentTrack;
    if (this.props.tracks.length) {
      currentTrack = this.props.tracks[this.props.currentIndex];
    } else {
      currentTrack = {
        title: "No track selected",
        artist: "Please select a track to play",
        coverart: noAlbum
      };
    }

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