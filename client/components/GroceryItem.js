import React from "react";

const GroceryItem = ({ id, onClick, bought, text }) => (
  <li
    onClick={() => onClick(id)}
    style={{ textDecoration: bought ? "line-through" : "none" }}
  >
    {text}
  </li>
);

export default GroceryItem;
