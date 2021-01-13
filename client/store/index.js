/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import groceryReducer, { addGrocery } from "./grocery-store";

const store = createStore(
  groceryReducer, applyMiddleware(loggerMiddleware)
);

// Testing
store.dispatch(addGrocery("Milk"));
store.dispatch(addGrocery("Water"));
store.dispatch(addGrocery("Eggs"));

export default store;
