import React, { Component } from "react";
import { connect } from "react-redux";

import { Controls } from "../interface/Controls/Controls";
import { Details } from "../interface/Details/Details";
import actionTypes from "../../store/action-types";
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
      
        <Details 
          track={currentTrack} />

        <Controls
          shuffle={this.props.shuffle}
          repeat={this.props.repeat}
          change={this.props.onChangeTrack}
          isPlaying={this.props.isPlaying}
          togglePlay={this.props.onTogglePlay}
          toggleShuffle={this.props.onToggleShuffle}
          toggleRepeat={this.props.onToggleRepeat} />

      </div>
    );
  }
}

// mapped properties to the component
const mapStateToProps = state => {
  return {
    tracks: state.tracksList,
    currentIndex: state.currentIndex,
    isPlaying: state.isPlaying,
    shuffle: state.shuffle,
    repeat: state.repeat,
  };
};

// mapped dispatch to the component
const mapDispatchToProps = dispatch => {
  return {
    onChangeTrack: (skip) => () => dispatch({ type: actionTypes.CHANGE_TRACK, skip: skip }),
    onTogglePlay: () => dispatch({ type: actionTypes.TOGGLE_PLAY }),
    onToggleShuffle: () => dispatch({ type: actionTypes.TOGGLE_SHUFFLE }),
    onToggleRepeat: () => dispatch({ type: actionTypes.TOGGLE_REPEAT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);