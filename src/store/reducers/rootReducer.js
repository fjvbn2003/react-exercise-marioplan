import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducer, combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;