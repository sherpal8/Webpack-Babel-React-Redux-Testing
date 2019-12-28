import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// thunk
export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        // dispatch of action-type and payload to the reducer
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
