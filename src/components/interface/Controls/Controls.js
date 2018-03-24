import React from "react";

import IconButton from "material-ui/IconButton";
import LeftIcon from "material-ui-icons/SkipPrevious";
import PauseIcon from "material-ui-icons/Pause";
import PlayIcon from "material-ui-icons/PlayArrow";
import RepeatIcon from "material-ui-icons/Repeat";
import RightIcon from "material-ui-icons/SkipNext";
import ShuffleIcon from "material-ui-icons/Shuffle";

import "./Controls.css";

// Make the button for a given icon
const makeButton = (icon, label) => (
  <IconButton aria-label={label}>
    {icon}
  </IconButton>
);

/**
 * Controls is a stateless component that provides the interface to move to next
 * or previous songs in the list. It also displays shuffle and repeat icons.
 * @param {Object} props Contains the properties passed down to this component
 */
const Controls = (props) => {
  return (
    <div className="Controls">

      {makeButton(<ShuffleIcon />, "Shuffle")}
      <div>
        {makeButton(<LeftIcon className="secondary-button" />, "Previous")}
        {makeButton(<PlayIcon className="primary-button" />, "Play")}
        {makeButton(<RightIcon className="secondary-button" />, "Next")}
      </div>
      {makeButton(<RepeatIcon />, "Repeat")}

    </div>
  );
}
      
export default Controls;