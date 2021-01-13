import React from "react";

const GroceryItem = ({ id, bought, text, toggle, remove}) => (
  <div className="li-group">
    <li
      onClick={() => toggle(id)}
      style={{ textDecoration: bought ? "line-through" : "none" }}
    >
      {text}
    </li>
    <button
      className="btn-remove"
      onClick={() => remove(id)}
    >Delete</button>
  </div>
);

export default GroceryItem;
