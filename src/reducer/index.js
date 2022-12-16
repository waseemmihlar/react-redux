import Counter from './counter';
import Islogedin from './islogged'

import {createStore,combineReducers} from 'redux'


const store=combineReducers({
    Counter:Counter,
    Islogedin:Islogedin
})


export default store;

