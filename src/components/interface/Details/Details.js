import React from "react";

import Typography from 'material-ui/Typography';
import "./Details.css";
import "./Seekbar.css";

/**
 * Details is a stateless component that displays the details of the currently
 * playing song.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Details = (props) => {
  return (
    <div className="Details">

      <div className="Details-text">
        <Typography
          variant="headline"
          className="track-title">
          {props.track.title}
        </Typography>

        <Typography
          variant="subheading"
          className="track-subtitle">
          {props.track.artist}
        </Typography>
      </div>

      <div className="track-coverart">
        <img src={props.track.coverart} alt={props.track.title} />
      </div>
    </div>
  );
};

/**
 * Seekbar is a stateless component that shows the seekbar for a song.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Seekbar = (props) => {
  return (
    <div className="Seekbar">
      <div className="Seekbar-complete">
        <div className="Seekbar-filled" style={{ width: "40%" }}></div>
      </div>
      <div className="Seekbar-time">
        <div id="elapsed-time">04:11</div>
        <div id="total-time">05:30</div>
      </div>
    </div>
  )
}