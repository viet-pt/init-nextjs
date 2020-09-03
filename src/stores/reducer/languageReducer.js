import moment from 'moment';
import { DEFAULT_LOCALE, CHANGE_LOCALE } from 'stores/constant';

const initialState = {
  // locale: sessionStorage.getItem('language') || DEFAULT_LOCALE,
  locale: DEFAULT_LOCALE,
};

export function languageReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      moment.locale(action.payload);  // for antd
      return {
        ...state,
        locale: action.payload
      };
    default:
      return state;
  }
};

export const changeLocale = (value) => dispatch => {
  dispatch ({
    type: CHANGE_LOCALE,
    payload: value
  });
}
