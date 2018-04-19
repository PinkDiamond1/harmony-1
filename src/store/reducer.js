import actionTypes from "./actionTypes";
import okComputer from "../images/ok-computer.jpg";
import abbeyRoad from "../images/abbey-road.jpg";
import hotelCalifornia from "../images/hotel-california.jpg";

// initial state
const initialState = {
  tracksList: [
    { title: "Let Down", artist: "Radiohead", coverart: okComputer },
    { title: "Here Comes the Sun", artist: "The Beatles", coverart: abbeyRoad }
  ],
  currentIndex: 0,
  shuffle: false,
  repeat: false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRACK: {
      let newTrack = { title: "Hotel California", artist: "Eagles", coverart: hotelCalifornia };
      let updatedTracksList = state.tracksList.slice();
      updatedTracksList.push(newTrack);
      return { ...state, tracksList: updatedTracksList };
    }
  
    case actionTypes.DELETE_TRACK: {
      let index = action.key;
      let updatedTracksList = state.tracksList.slice();
      updatedTracksList.splice(index, 1);
      return { ...state, tracksList: updatedTracksList };
    }

    case actionTypes.CHANGE_TRACK: {
      let index = action.key;
      return { ...state, currentIndex: index }
    }

    default:
      return state;
  }
};

export default reducer;