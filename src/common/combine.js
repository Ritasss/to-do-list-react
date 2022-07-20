import { combineReducers } from 'redux';

import todosReducer from '../data/todos';
import filterReducer from '../data/filter'

const todoApp = combineReducers({
    todosReducer,
    filterReducer
});

export default todoApp;