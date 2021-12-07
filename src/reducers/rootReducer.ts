import {combineReducers} from "redux";
import {authReducer} from "./customs/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
});