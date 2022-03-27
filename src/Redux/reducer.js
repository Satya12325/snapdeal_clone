import {combineReducers} from "redux";
import {appReducer} from "./Allproduct/reducer"

export const rootReducer = combineReducers({
   
    app: appReducer,
    
})