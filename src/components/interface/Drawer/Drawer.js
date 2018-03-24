import React from "react";

import Dialog from "material-ui/Dialog";
import { ListItem, ListItemText } from "material-ui/List";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";

import { Header } from "../Header/Header";
import "./Drawer.css";

// links in the drawer
const menuLinks = (["Home", "About", "Song Page"]).map((link, index) => {
  return (
    <div key={index} className="Drawer-link">
      <Typography variant="title" className="open-sans">
        {link}
      </Typography>
    </div>
  );
});

/**
 * Drawer is a stateful component that transitions in and out the drawer. It shows
 * the main links of the application.
 */
class Drawer extends React.Component {
  constructor(props) {
    super(props);
    
    // state of the component
    this.state = { clicked: true };
  }

  // Change the state to close the drawer
  onCloseDrawer = () => {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <Dialog
        fullScreen
        open={this.state.clicked}
        onExited={this.props.closeDrawer(false)}
        transitionDuration={500}>

        <div className="Drawer">
          <Header 
            rightIconClick={this.onCloseDrawer}
            rightIcon={<CloseIcon />} />
            
          <div class="Drawer-links">{menuLinks}</div>
        </div>

      </Dialog>
    );
  }
}

export default Drawer;