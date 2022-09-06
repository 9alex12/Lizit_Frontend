import { createStore, applyMiddleware } from "redux";
import firstReducer from "./reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  first: firstReducer
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
