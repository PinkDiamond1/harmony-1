import React from "react";

import LeftIcon from "material-ui-icons/SkipPrevious";
import PauseIcon from "material-ui-icons/Pause";
import PlayIcon from "material-ui-icons/PlayArrow";
import RepeatIcon from "material-ui-icons/Repeat";
import RightIcon from "material-ui-icons/SkipNext";
import ShuffleIcon from "material-ui-icons/Shuffle";

import { Button } from "../Button/Button";
import { Seekbar } from "../Seekbar/Seekbar";
import "./Controls.css";

/**
 * Controls is a stateless component that provides the interface to move to next
 * or previous songs in the list. It also displays shuffle and repeat icons.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Controls = (props) => {
  return (
    <div className="Controls">
      
      <Seekbar 
        track={props.track}
        change={props.change(1)}
        isPlaying={props.isPlaying} />

      <div className="Controls-buttons">
        
        <Button
          label="Shuffle"
          action={props.toggleShuffle}
          counter={props.shuffle}>
          <ShuffleIcon />
        </Button>

        <div className="Controls-center-buttons">
          
          <Button
            label="Previous"
            action={props.change(-1)}>
            <LeftIcon className="secondary-button" />
          </Button>
          
          {props.isPlaying
          ? <Button
              label="Pause"
              action={props.togglePlay}>
              <PauseIcon className="primary-button" />
            </Button>

          : <Button
              label="Play"
              action={props.togglePlay}>
              <PlayIcon className="primary-button" />
            </Button>}

          <Button
            label="Next"
            action={props.change(1)}>
            <RightIcon className="secondary-button" />
          </Button>

        </div>
        
        <Button
          label="Repeat"
          action={props.toggleRepeat}
          counter={props.repeat}>
          <RepeatIcon />
        </Button>

      </div>

    </div>
  );
}