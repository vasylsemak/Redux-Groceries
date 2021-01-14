import { createStore } from "redux";
import groceryReducer, { addGrocery } from "./grocery-store";

const store = createStore(
  groceryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Hardcoded items
store.dispatch(addGrocery("Milk"));
store.dispatch(addGrocery("Water"));
store.dispatch(addGrocery("Eggs"));

export default store;
