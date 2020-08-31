import {combineReducers} from 'redux';
import newsReducers from './news';
import productsReducers from './products';
const reducers = combineReducers({
    news:newsReducers,
    products:productsReducers
})
export default reducers ;