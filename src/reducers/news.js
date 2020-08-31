import {
    SET_LIST_NEWS,
    SHOW_BUTTON_DETAIL,
    HIDDEN_BUTTON_DETAIL,
    DELETE_NEWS,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAIL,
    ADD_DETAIL_NEWS,
    ADD_DETAIL_NEWS_SUCCESS,
    ADD_DETAIL_NEWS_FAIL
} from './../constants/ActionTypes';
import { toast } from 'react-toastify';
let initalNews = {
    page: 2,
    numberpage: 1,
    listnews: [],
    showButton: true
};
const newsReducers = (state = initalNews, action) => {
    switch (action.type) {
        case SET_LIST_NEWS:
            return {
                ...state,
                listnews: [...action.payload]
            }
        case SHOW_BUTTON_DETAIL:
            return {
                ...state,
                showButton: true
            }
        case HIDDEN_BUTTON_DETAIL: {
            return {
                ...state,
                showButton: false
            }
        }
        case DELETE_NEWS:
            return {
                ...state
            }
        case DELETE_NEWS_SUCCESS: {
            toast.success("Xóa Thành Công Tin Tức");
            return {
                ...state,
                showButton : true
            }
        }
        case DELETE_NEWS_FAIL: {
            toast.error("Có Lỗi Xảy Ra Khi Xóa");
            return {
                ...state,
            }
        }

        case ADD_DETAIL_NEWS:
            return {
                ...state
            }
        case ADD_DETAIL_NEWS_SUCCESS: {
            if(action.payload.data.length != 0){
                return {...state,
                    page : state.page +1,
                    listnews: state.listnews.concat(action.payload.data),
                }
            }else{
                return {
                    ...state,
                    showButton : false
                }
            }

        }
        case ADD_DETAIL_NEWS_FAIL: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
export default newsReducers;