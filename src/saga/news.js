import { takeEvery, select, call, fork, put, all } from 'redux-saga/effects';
import { FETCH_LIST_NEWS, DELETE_NEWS, ADD_DETAIL_NEWS } from '../constants/ActionTypes';
import {
    ACTION_SET_LIST_NEWS,
    ACTION_DELETE_NEWS_SUCCESS,
    ACTION_DELETE_NEWS_FAIL,
    ACTION_ADD_DETAIL_NEWS_SUCCESS
} from './../actions/newsActions';
function* watchFetchListNews() {
    yield takeEvery(FETCH_LIST_NEWS, FetchListNews);
}
function* FetchListNews() {
    const page = 1
    const datafetch = yield call(fetchListNews, page);
    if (datafetch?.data?.status == "success") {
        yield put(ACTION_SET_LIST_NEWS(datafetch.data.data));
    }
}
function* DeleteNews({ payload }) {
    const { id } = payload
    const result = yield call(fetchDeleteNews, id);
    if (result?.data?.status == "success") {
        yield call(FetchListNews)
        yield put(ACTION_DELETE_NEWS_SUCCESS(result.data.data))
    } else {
        yield put(ACTION_DELETE_NEWS_FAIL(payload));
    }
}
function* watchDeleteNews() {
    yield takeEvery(DELETE_NEWS, DeleteNews)
}
function* AddDetailNews() {
    yield takeEvery(ADD_DETAIL_NEWS, adddetailNews)
}
function* adddetailNews() {
    const page = yield select(state => state.news.page);
    const datafetch = yield call(fetchListNews, page);
    if (datafetch?.data?.status == "success") {
        yield put(ACTION_ADD_DETAIL_NEWS_SUCCESS(datafetch.data.data));
    }
}
export default function* news() {
    yield all([watchFetchListNews(), watchDeleteNews(), AddDetailNews()])
}