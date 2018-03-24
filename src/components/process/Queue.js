import React, { Component } from "react";

import Dialog from "material-ui/Dialog";
import Slide from 'material-ui/transitions/Slide';
import AddIcon from "material-ui-icons/Add";
import DownIcon from "material-ui-icons/KeyboardArrowDown";

import { Header } from "../interface/Header/Header";
import { Tracks } from "../interface/Tracks/Tracks";
import State from "../../data/State";

// transition of the queue dialog
const QueueTransition = (props) => {
  return <Slide direction="up" {...props} />
};

/**
 * Queue is a stateful component that transitions in and out the Queue Dialog. The
 * dialog opens up to display the list of the songs. It also shows the add icon 
 * to add new songs into the list.
 */
class Queue extends Component {
  constructor(props) {
    super(props);
    
    // state of the component
    this.state = { clicked: true, ...State };
  }

  // close the queue dialog
  onCloseQueue = () => {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <Dialog
        fullScreen
        open={this.state.clicked}
        onExited={this.props.closeQueue}
        transition={QueueTransition}>

        <Header 
          leftIconClick={this.onCloseQueue} 
          leftIcon={<DownIcon />}
          rightIcon={<AddIcon />} />

        <Tracks tracks={this.state.songsList} />

      </Dialog>
    );
  }
};

export default Queue;