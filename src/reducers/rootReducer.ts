import {combineReducers} from "redux";
import {authReducer} from "./customs/authReducer";
import {eventReducer} from "./customs/eventReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer
});