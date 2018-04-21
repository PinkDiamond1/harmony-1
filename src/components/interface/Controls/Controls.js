import React from "react";

import IconButton from "material-ui/IconButton";
import LeftIcon from "material-ui-icons/SkipPrevious";
import PauseIcon from "material-ui-icons/Pause";
import PlayIcon from "material-ui-icons/PlayArrow";
import RepeatIcon from "material-ui-icons/Repeat";
import RightIcon from "material-ui-icons/SkipNext";
import ShuffleIcon from "material-ui-icons/Shuffle";

import "./Controls.css";
import "./Seekbar.css";

// Button stateless component
const ControlButton = (props) => {
  let color = props.counter ? "primary" : "default";
  return (
    <IconButton 
      aria-label={props.label} 
      onClick={props.action} 
      color={color}>
      {props.children}
    </IconButton>
  );
};

/**
 * Controls is a stateless component that provides the interface to move to next
 * or previous songs in the list. It also displays shuffle and repeat icons.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Controls = (props) => {
  return (
    <div className="Controls">
      
      <div className="Seekbar">
        <div className="Seekbar-complete">
          <div className="Seekbar-filled" style={{ width: "40%" }}></div>
        </div>
      </div>

      <div className="Controls-buttons">
        
        <ControlButton
          label="Shuffle"
          action={props.toggleShuffle}
          counter={props.shuffle}>
          <ShuffleIcon />
        </ControlButton>

        <div className="Controls-center-buttons">
          
          <ControlButton
            label="Previous"
            action={props.change(-1)}>
            <LeftIcon className="secondary-button" />
          </ControlButton>
          
          {props.isPlaying
          ? <ControlButton
              label="Pause"
              action={props.togglePlay}>
              <PauseIcon className="primary-button" />
            </ControlButton>

          : <ControlButton
              label="Play"
              action={props.togglePlay}>
              <PlayIcon className="primary-button" />
            </ControlButton>}

          <ControlButton
            label="Next"
            action={props.change(1)}>
            <RightIcon className="secondary-button" />
          </ControlButton>

        </div>
        
        <ControlButton
          label="Repeat"
          action={props.toggleRepeat}
          counter={props.repeat}>
          <RepeatIcon />
        </ControlButton>

      </div>

    </div>
  );
}