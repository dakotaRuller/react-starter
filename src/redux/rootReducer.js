import {actionTypes} from "./actionCreator";

export function rootReducer(state, action) {
  if( action != null ) {
    switch (action.type) {
      case actionTypes.UPDATE_TEXT:
        // let newState = {...state};
        return Object.assign({}, state, {text: action.text});
      default:
        return state;
    }
  } else {
    return state
  }
}