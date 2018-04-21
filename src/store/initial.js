import okComputer from "../images/ok-computer.jpg";
import abbeyRoad from "../images/abbey-road.jpg";

// initial state
const initialState = {
  tracksList: [
    { title: "Let Down", artist: "Radiohead", coverart: okComputer, 
      duration: 299000 },
    { title: "Here Comes the Sun", artist: "The Beatles", coverart: abbeyRoad, 
      duration: 185000 }
  ],
  currentIndex: 0,
  shuffle: false,
  repeat: false,
  isPlaying: false,
};

export default initialState;