import React from "react";
import { connect } from "react-redux";
import { toggleItem } from "../store/grocery-store";

const GroceryItemComp = ({ id, onClick, bought, text }) => (
  <li
    onClick={() => onClick(id)}
    style={{ textDecoration: bought ? "line-through" : "none" }}
  >
    {text}
  </li>
);

const mapDispatch = dispatch => ({
  onClick: (id) => dispatch(toggleItem(id))
});

const GroceryItem = connect(null, mapDispatch)(GroceryItemComp);
export default GroceryItem;
