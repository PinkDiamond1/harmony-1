import React, { Component } from "react";

import ListIcon from "material-ui-icons/Sort";
import MenuIcon from "material-ui-icons/MoreVert";

import Drawer from "./components/interface/Drawer/Drawer";
import { Header } from "./components/interface/Header/Header";
import Player from "./components/process/Player";
import Queue from "./components/process/Queue";

/**
 * App Component
 * 
 * This is a stateful component which controls the toggling of the Drawer and 
 * Queue Components. It is the main component of the application which wraps all 
 * the other components.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,  // state for drawer
      isQueueOpen: false,  // state for queue dialog
    };
  }

  /**
   * Handle the drawer toggle
   * @param {Boolean} action Is the counter for toggling of the drawer
   */
  onToggleDrawer = (action) => () => {
    this.setState({ ...this.state, isDrawerOpen: action });
  };

  /**
   * Handle the queue dialog toggle
   * @param {Boolean} action Is the counter for toggling of the queue dialog
   */
  onToggleQueue = (action) => () => {
    this.setState({ ...this.state, isQueueOpen: action });
  }

  render() {
    return (
      <div style={{ paddingBottom: "4rem" }}>
        <Header 
          leftIconClick={this.onToggleQueue(true)}
          rightIconClick={this.onToggleDrawer(true)}
          leftIcon={<ListIcon />}
          rightIcon={<MenuIcon />} />

        {/* if the drawer state is true */}
        {this.state.isDrawerOpen
          ? <Drawer closeDrawer={this.onToggleDrawer} />
          : null}
        
        {/* is the queue dialog state is true */}
        {this.state.isQueueOpen
          ? <Queue closeQueue={this.onToggleQueue(false)} />
          : null}

        <Player />
      </div>
    );
  }
}

export default App;