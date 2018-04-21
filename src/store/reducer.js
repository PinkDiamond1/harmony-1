import actionTypes from "./action-types";
import initialState from "./initial";
import { 
  addTrackReducer, 
  deleteTrackReducer, 
  changeTrackReducer,
  toggleShuffleReducer,
} from "./reducer-funcs";

/**
 * Change the state values and return the new state
 * @param {Object} state Is the original state
 * @param {Object} change Is the key value pair for new values
 */
const updateState = (state, change) => (
  { ...state, ...change }
);

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRACK: 
      return updateState(state, addTrackReducer(state, action));
  
    case actionTypes.DELETE_TRACK:
      return updateState(state, deleteTrackReducer(state, action));

    case actionTypes.CHANGE_TRACK: 
      return updateState(state, changeTrackReducer(state, action));

    case actionTypes.TOGGLE_PLAY:
      return updateState(state, { isPlaying: !state.isPlaying });

    case actionTypes.TOGGLE_SHUFFLE:
      return updateState(state, toggleShuffleReducer(state, action));
    
    case actionTypes.TOGGLE_REPEAT:
      return updateState(state, { repeat: !state.repeat });

    default:
      return state;
  }
};

export default reducer;