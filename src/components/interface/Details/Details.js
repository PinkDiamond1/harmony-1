import React from "react";

import Typography from 'material-ui/Typography';
import "./Details.css";

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
