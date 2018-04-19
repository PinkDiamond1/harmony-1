import React, { Component } from "react";
import { connect } from "react-redux";

import Dialog from "material-ui/Dialog";
import Slide from 'material-ui/transitions/Slide';
import AddIcon from "material-ui-icons/Add";
import DownIcon from "material-ui-icons/KeyboardArrowDown";

import { Header } from "../interface/Header/Header";
import { Tracks } from "../interface/Tracks/Tracks";
import actionTypes from "../../store/actionTypes";

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
    this.state = { clicked: true };
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
          rightIconClick={this.props.onAddTrack}
          leftIcon={<DownIcon />}
          rightIcon={<AddIcon />} />

        <Tracks 
          tracks={this.props.tracks}
          delete={this.props.onDeleteTrack}
          change={this.props.onChangeTrack}
          currentIndex={this.props.currentIndex} />

      </Dialog>
    );
  }
};

// mapped properties to the component
const mapStateToProps = state => {
  return {
    tracks: state.tracksList,
    currentIndex: state.currentIndex,
  };
};

// mapped dispatch to the component
const mapDispatchToProps = dispatch => {
  return {
    onAddTrack: () => dispatch({ type: actionTypes.ADD_TRACK }),
    onDeleteTrack: (index) => () => dispatch({ type: actionTypes.DELETE_TRACK, key: index }),
    onChangeTrack: (index) => () => dispatch({ type: actionTypes.CHANGE_TRACK, key: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);