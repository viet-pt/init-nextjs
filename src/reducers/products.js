import * as types from './../constants/ActionTypes';
import {toast} from 'react-toastify';
const initialSate = {
    page: 1,
    numberpage: 1,
    listproducts: [],
    errors: null,
}
const reducersProducts = (state = initialSate, action) => {
    switch (action.type) {
        case types.SET_LIST_PRODUCT: {
            return {
                ...state,
                listproducts: [...action.payload]
            }
        }
        case types.DELETE_PRODUCT: {
            return {
                ...state,
            }
        }
        case types.DELETE_PRODUCT_SUCCESS : {
            toast.success("Xóa Thành Công Sản Phẩm");
            return {
                ...state
            }
        }
        case types.DELETE_PRODUCT_FAIL : {
            toast.error("Có Lỗi Xảy Ra Khi Xóa");
            return {
                ...state,
                errors
            }
        }
        default:
            return state;
    }
}
export default reducersProducts;