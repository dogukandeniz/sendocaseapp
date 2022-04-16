import { combineReducers } from 'redux';


import { search } from './search.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    search,
    alert
});

export default rootReducer;