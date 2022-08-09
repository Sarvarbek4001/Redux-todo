import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
