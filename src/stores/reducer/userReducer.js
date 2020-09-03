import { ADD_USER_INFO, REMOVE_USER_INFO, AuthorizeAction } from "stores/constant";

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_USER_INFO:
      return {};

    default:
      return state;
  }
};

export const setUserInfo = (userInfo) => dispatch => {
  dispatch ({
    type: ADD_USER_INFO,
    payload: userInfo
  });
}

export const removeUserInfo = () => dispatch => {
  dispatch ({
    type: REMOVE_USER_INFO
  });
}

export function authorizedReducer(state = initialState, action) {
  switch (action.type) {
    case AuthorizeAction.LOGIN_ACTION:
      return {
        ...state,
        authorized: true
      };
      
    case AuthorizeAction.LOGOUT_ACTION:
      return {
        ...state,
        authorized: false
      };

    default:
      return state;
  }
}
