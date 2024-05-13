import { combineReducers } from "redux";
import jobReducer from "./jobs";
import currentUserReducer from "./currentUser"
import authReducer from "./auth"

export default combineReducers({
    jobReducer,
    currentUserReducer,
    authReducer
})
