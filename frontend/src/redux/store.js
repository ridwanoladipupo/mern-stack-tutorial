import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducers";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
