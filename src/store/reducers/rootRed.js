import {combineReducers} from 'redux'
import projectRed from './projectRed'
import { firestoreReducer } from "redux-firestore";
import {  firebaseReducer } from "react-redux-firebase";
import authRed from './authRed'

const rootRed = combineReducers({
    project : projectRed,
    auth:authRed,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootRed