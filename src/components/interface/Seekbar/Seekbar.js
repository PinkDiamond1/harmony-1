import React, { Component } from "react";

import "./Seekbar.css";

/**
 * Seekbar is a stateful component that shows the seekbar in the controls. It 
 * updates the seekbar as the track plays.
 * @param {Object} props Contains the properties passed down to this component
 */
export class Seekbar extends Component {
  constructor(props) {
    super(props);

    // state of the component
    this.state = { percentage: 0, intervalID: null, track: null };
  }

  // initialize the state
  init = (props) => {
    // clear the time interval of previous track
    this.state.intervalID && clearInterval(this.state.intervalID);

    let intervalID = setInterval(this.updateTimer, 1000);
    this.setState({ percentage: 0, intervalID: intervalID, track: props.track });
  }

  // restart the seekbar on change of a track
  componentWillReceiveProps = (nextProps) => {
    if (JSON.stringify(this.props.track) !== JSON.stringify(nextProps.track)) {
      this.init(nextProps);
    }
  }

  componentDidMount = () => {
    this.init(this.props);
  }

  componentWillUnmount = () => {
    this.state.intervalID && clearInterval(this.state.intervalID);
  }

  // update the seekbar as the song plays
  updateTimer = () => {
    if (this.props.isPlaying) {
      let totalTime = this.state.track.duration;
      let elapsedTime = (this.state.percentage * totalTime / 100) + 1000;

      if (elapsedTime < totalTime) {
        let newPercentage = elapsedTime * 100 / totalTime;
        this.setState((state) => ({ ...this.state, percentage: newPercentage }));

      } else {
        // change the track to next if track has completed playing
        this.props.change();
      }
    }
  };

  // move the seekbar position to the clicked point
  moveSeekbar = (event) => {
    event.persist();
    let widthToClickedPoint = event.clientX;
    let totalWidth = event.nativeEvent.view.innerWidth;
    let newPercentage = (widthToClickedPoint * 100) / totalWidth;
    this.setState((state) => ({ ...this.state, percentage: newPercentage }));
  }

  render() {
    return (
      <div className="Seekbar">
        <div className="Seekbar-complete" onClick={this.moveSeekbar.bind(this)}>
          <div className="Seekbar-filled" 
            style={{ width: this.state.percentage + "%" }}>
          </div>
        </div>
      </div>
    );
  }
}
