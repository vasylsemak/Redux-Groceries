import React from "react";
import { connect } from "react-redux";
import GroceryItem from "./GroceryItem";
import { toggleItem, removeItem, SHOW_BOUGHT, SHOW_ACTIVE } from "../store/grocery-store";

const ListComponent = props => {
  let { groceries, filter } = props;

  groceries = (filter === SHOW_BOUGHT)
    ? groceries.filter(g => g.bought === true)
    : (filter === SHOW_ACTIVE)
      ? groceries.filter(g => g.bought === false)
      : groceries

  return (
    <ul>
      {groceries.map(grocery => (
        <GroceryItem key={grocery.id} groceryItem={grocery} {...props} />
      ))}
    </ul>
  )
};

const mapState = state => ({
  groceries: state.groceries,
  filter: state.filter
});

const mapDispatch = dispatch => ({
  toggle: id => dispatch(toggleItem(id)),
  remove: id => dispatch(removeItem(id))
});

const GroceryList = connect(mapState, mapDispatch)(ListComponent);
export default GroceryList;
