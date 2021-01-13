const ADD_GROCERY = "ADD_GROCERY";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

let nextId = 0;
export const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  text
});

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
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
    case TOGGLE_ITEM:
      const toggled = state.groceries.map(g => {
        if(g.id === action.id) g.bought = !g.bought;
        return g;
      })
      return { ...state, groceries: toggled };
    case REMOVE_ITEM:
      const filtered = state.groceries.filter(g => g.id !== action.id);
      return { ...state, groceries: filtered };
    default:
      return state;
  }
}

export default groceryReducer;
