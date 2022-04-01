import {combineReducers} from "redux";
import {appReducer} from "./Allproduct/reducer"
import {cart_reducer} from "./Cacrt/cart.reducer"
export const rootReducer = combineReducers({
   
    app: appReducer,
    cart: cart_reducer,
    
})