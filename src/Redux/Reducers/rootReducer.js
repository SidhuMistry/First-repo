import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import numberReducer from "./numberReducer";
import apiReducer from "./ApiReducer";
 
export const rootReducer = combineReducers({
    count : counterReducer,
    num : numberReducer,
    student : apiReducer
})