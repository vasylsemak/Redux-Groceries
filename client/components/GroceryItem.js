import React, { Component } from "react";
import { connect } from "react-redux";
import { setQuantity } from "../store/grocery-store";

const GroceryItemComp = ({ groceryItem, toggle, remove, setQuantity }) => {
  const { id, bought, text } = groceryItem;
  const handleChange = evt => setQuantity(id, parseInt(evt.target.value));

  return (
    <div className="li-group">
      <div>
        <li
          onClick={() => toggle(id)}
          style={{ textDecoration: bought ? "line-through" : "none" }}
        >{text}</li>
      </div>
      <div>
        <label className="quantity-label">Quantity:  </label>
        <input
          className="quantity" type="number"
          min="1" max="20" step="1"
          onChange={handleChange}
        />
        <button
          className="btn-remove"
          onClick={() => remove(id)}
        >Delete</button>
      </div>
    </div>
  )
};

const mapDispatch = dispatch => ({
  setQuantity: (id, q) => dispatch(setQuantity(id, q))
});

const GroceryItem = connect(null, mapDispatch)(GroceryItemComp);
export default GroceryItem;
