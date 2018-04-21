import hotelCalifornia from "../images/hotel-california.jpg";

/**
 * Reducer to add a track into the list
 * @param {object} state Is the state of the store
 * @param {object} action Is the action 
 * @returns {object} Contains the changed properties of the state
 */
export const addTrackReducer = (state, action) => {
  let newTrack = { title: "Hotel California", artist: "Eagles", coverart: hotelCalifornia };
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
  let moveTo = action.hasOwnProperty("key") ? action.key : (
    action.hasOwnProperty("skip")
      ? (state.currentIndex + action.skip + tracksLength) % tracksLength
      : state.currentIndex);

  return { currentIndex: moveTo, isPlaying: true }
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