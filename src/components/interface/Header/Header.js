import React from "react";

import IconButton from "material-ui/IconButton";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import "./Header.css";

/**
 * Header is a stateless component that displays the header of the application
 * i.e. the title and the left and right icons.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Header = (props) => {
  return (
    <div className="header">

      <Paper elevation={0}>
        <IconButton aria-label="Menu" onClick={props.leftIconClick}>
          {props.leftIcon}
        </IconButton>
      </Paper>

      <Paper elevation={0}>
        <Typography
          variant="title"
          align="center"
          className="h-title">Harmony</Typography>
      </Paper>

      <Paper elevation={0}>
        <IconButton aria-label="Menu" onClick={props.rightIconClick}>
          {props.rightIcon}
        </IconButton>
      </Paper>

    </div>
  );
};