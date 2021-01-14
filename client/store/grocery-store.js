const ADD_GROCERY = "ADD_GROCERY";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const SET_QUANTITY = "SET_QUANTITY";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_BOUGHT = "SHOW_BOUGHT";
export const SHOW_ACTIVE = "SHOW_ACTIVE";


//Actions
let nextId = 1;

export const toggleItem = id => ({ type: TOGGLE_ITEM, id });
export const removeItem = id => ({ type: REMOVE_ITEM, id });
export const addGrocery = text => ({ type: ADD_GROCERY, id: nextId++, text });
export const setFilter = filterType =>
  ({ type: SET_VISIBILITY_FILTER, filterType });
export const setQuantity = (id, quantity) =>
  ({ type: SET_QUANTITY, id, quantity });


// Initial State
const initialState = { groceries: [], filter: SHOW_ALL };

//Reducer
const groceryReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        quantity: 1,
        bought: false
      };
      return { ...state, groceries: [...state.groceries, newGrocery] };

    case TOGGLE_ITEM:
      const toggled = state.groceries.map(g => {
        if(g.id === action.id) g.bought = !g.bought;
        return g;
      });
      return { ...state, groceries: toggled };

    case REMOVE_ITEM:
      const filtered = state.groceries.filter(g => g.id !== action.id);
      return { ...state, groceries: filtered };

    case SET_VISIBILITY_FILTER:
      return { ...state, filter: action.filterType };

    case SET_QUANTITY:
      const adjusted = state.groceries.map(g => {
        if(g.id === action.id) g.quantity = action.quantity;
        return g;
      });
      return { ...state, groceries: adjusted };

    default:
      return state;
  }
}

export default groceryReducer;
