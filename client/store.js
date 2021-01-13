/* eslint-disable no-unused-vars */
import { createStore } from "redux";

const ADD_GROCERY = "ADD_GROCERY";

let nextId = 0;
const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  text
});

const initialState = { groceries: [] };

const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      };
      return { ...state, groceries: [...state.groceries, newGrocery] };
    default:
      return state;
  }
}

const store = createStore(groceryReducer);
export default store;

