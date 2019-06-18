import { combineReducers } from "redux";
import cartReducer from "./cart/reducers";

const rootReducer = combineReducers({ cartReducer });

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;