import { ProgressAction } from "stores/constant";

const initialState = {
  loading: 0
};

export function progressReducer(state = initialState, action) {
  switch (action.type) {
    case ProgressAction.SHOW_PROGRESS:
      return {
        ...state,
        loading: state.loading + 1,
      };
      
    case ProgressAction.HIDE_PROGRESS:
      return {
        ...state,
        loading: state.loading - 1,
      };

    default:
      return state;
  }
}

export const showProgressTurn = () => (dispatch) => {
  return dispatch({ 
    type: ProgressAction.SHOW_PROGRESS
  })
}

export const hideProgressTurn = () => (dispatch) => {
  return dispatch({
    type: ProgressAction.HIDE_PROGRESS
  })
}