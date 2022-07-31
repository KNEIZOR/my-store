import { combineReducers } from "redux";
import { sortedReducer } from "./sortedReducer";
import { queryReducer } from "./queryReducer";
import { cartReducer } from "./cartReducer";
import { totalReducer } from "./totalReducer";

export const rootReducer = combineReducers({
    sortedReducer,
    queryReducer,
    cartReducer,
    totalReducer,
});
