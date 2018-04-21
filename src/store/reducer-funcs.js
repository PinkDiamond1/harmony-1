import hotelCalifornia from "../images/hotel-california.jpg";

/**
 * Reducer to add a track into the list
 * @param {object} state Is the state of the store
 * @param {object} action Is the action 
 * @returns {object} Contains the changed properties of the state
 */
export const addTrackReducer = (state, action) => {
  let newTrack = { 
    title: "Hotel California", 
    artist: "Eagles", 
    coverart: hotelCalifornia,
    duration: 391000,
  };
  let updatedCurrentIndex = state.currentIndex < 0 ? 0 : state.currentIndex;
  let updatedTracksList = state.tracksList.slice();

  updatedTracksList.push(newTrack);
  return { tracksList: updatedTracksList, currentIndex: updatedCurrentIndex };
}

/**
 * Reducer to delete a track from the list
 * @param {object} state Is the state of the store
 * @param {object} action Is the action 
 * @returns {object} change Contains the changed properties of the state
 */
export const deleteTrackReducer = (state, action) => {
  // action.key is the index of track to be deleted
  let toDeleteIndex = action.key;
  let updatedCurrentIndex = state.currentIndex;
  let isPlaying = state.isPlaying;
  let updatedTracksList = state.tracksList.slice();

  // check if track to be deleted is last in the list and currently playing
  // check if track to be deleted is above than the currently playing track
  if ((state.currentIndex === toDeleteIndex && state.currentIndex === state.tracksList.length - 1) 
      || state.currentIndex > toDeleteIndex) {
      updatedCurrentIndex--;
    }
  updatedTracksList.splice(toDeleteIndex, 1);

  // check if tracks list is empty
  !updatedTracksList.length && (isPlaying = false);

  return {
    currentIndex: updatedCurrentIndex,
    tracksList: updatedTracksList,
    isPlaying: isPlaying
  };
}

/**
 * Reducer to change a track
 * @param {object} state Is the state of the store
 * @param {object} action Is the action 
 * @returns {object} change Contains the changed properties of the state
 */
export const changeTrackReducer = (state, action) => {
  let tracksLength = state.tracksList.length;
  
  // value of action.key can be 0
  // action.key is the index of the new track
  // action.skip is the number of tracks to be skipped
  let moveTo = action.hasOwnProperty("key") ? action.key : (
    action.hasOwnProperty("skip")
      ? (!state.repeat &&
          ((state.currentIndex === state.tracksList.length - 1 && action.skip > 0)
            || (state.currentIndex === 0 && action.skip < 0)))
        ? state.currentIndex
        : (state.currentIndex + action.skip + tracksLength) % tracksLength
      : state.currentIndex);

  // if the new track is same as the previous one, playing is stopped
  return { currentIndex: moveTo, isPlaying: (moveTo !== state.currentIndex) }
}

/**
 * Reducer to shuffle the tracks
 * @param {object} state Is the state of the store
 * @param {object} action Is the action 
 * @returns {object} change Contains the changed properties of the state
 */
export const toggleShuffleReducer = (state, action) => {
  if (state.shuffle) {
    return { shuffle: false };
  } else {

    // shuffle the tracks list
    let tracks = state.tracksList;
    let updatedCurrentIndex = state.currentIndex;
    let isIndexChanged = false;

    for (let i = 0; i < tracks.length; i++) {
      let range = tracks.length - i;
      let randomNumber = Math.floor(Math.random() * range) + i;

      // change the currentIndex to the new index
      if (!isIndexChanged) {
        if (state.currentIndex === i) {
          updatedCurrentIndex = randomNumber;
          isIndexChanged = true;
        } else if (state.currentIndex === randomNumber) {
          updatedCurrentIndex = i;
          isIndexChanged = true;
        }
      }
      
      [tracks[i], tracks[randomNumber]] = [tracks[randomNumber], tracks[i]];
    }
    
    return { 
      tracksList: tracks, 
      currentIndex: updatedCurrentIndex,
      shuffle: true
    };
  }
}
