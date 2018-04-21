import React from "react";

import IconButton from "material-ui/IconButton";
import "./Button.css";

/**
 * Button is a stateless component that displays the button icons.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Button = (props) => {
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
