import React from "react";

import Avatar from "material-ui/Avatar";
import Divider from 'material-ui/Divider';
import IconButton from "material-ui/IconButton";
import List, { ListItem, ListItemSecondaryAction } from "material-ui/List";
import Typography from "material-ui/Typography";

import DeleteIcon from "material-ui-icons/Delete";
import PlayIcon from "material-ui-icons/PlayArrow";

/**
 * Tracks is a stateless component which shows the list of the songs in the Queue
 * dialog. The songs displayed can be played or removed from the list.
 * @param {Object} props Contains the properties passed down to this component
 */
export const Tracks = (props) => {
  const tracks = props.tracks;

  const tracksList = tracks.map((track, index) => {
    return (
      <span key={index}>
        <ListItem>
          
          <Avatar><img src={track.coverart} alt="Cover Art" /></Avatar>
          <div style={{ marginLeft: "1rem", width: "40%" }}>
            <Typography noWrap={true} style={{ fontSize: "1rem" }}>
              {track.title}
            </Typography>
            <Typography variant="body2" noWrap={true} color={"secondary"}>
              {track.artist}
            </Typography>
          </div>

          <ListItemSecondaryAction>
            <IconButton aria-label="Play">
              <PlayIcon />
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        
        <li><Divider inset /></li>
      </span>
    );
  });

  return <List>{tracksList}</List>;
};
