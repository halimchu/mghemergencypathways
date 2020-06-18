import { combineReducers } from 'redux'
import timerReducer from './timerReducer'
import CPRshockEpiReducer from './CPRshockEpiReducer'
import timerReducerCovid from './timerReducerCovid'

export default combineReducers({ 
    timerReducer: timerReducer,
    CPRshockEpiReducer: CPRshockEpiReducer,
    timerReducerCovid: timerReducerCovid,
})