import * as ListConstants from './../constants/ActionTypes';
export const ACTION_FETCH_LIST_PRODUCT = () => {
    return {
        type: ListConstants.FETCH_LIST_PRODUCT,
        payload: null
    }
}
export const ACTION_SET_LIST_PRODUCT = (data) => {
    return {
        type: ListConstants.SET_LIST_PRODUCT,
        payload: data
    }
}
export const ACTION_DELETE_PRODUCT = (id) => {
    return {
        type: ListConstants.DELETE_PRODUCT,
        payload: {
            id
        }
    }
}
export const ACTION_DELETE_PRODUCT_SUCCESS = data => {
    return {
        type: ListConstants.DELETE_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}
export const ACTION_DELETE_PRODUCT_FAIL = errors => {
    return {
        type: ListConstants.DELETE_PRODUCT_FAIL,
        payload: {
            errors
        }
    }
}