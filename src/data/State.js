import okComputer from "../images/ok-computer.jpg";
import abbeyRoad from "../images/abbey-road.jpg";

// dummy data for the application
const State = {
  songsList: [
    { title: "Let Down", artist: "Radiohead", coverart: okComputer },
    { title: "Here Comes the Sun", artist: "The Beatles", coverart: abbeyRoad }
  ],
  currentIndex: 0,
  shuffle: false,
  repeat: false
};

export default State;