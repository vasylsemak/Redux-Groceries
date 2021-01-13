import React from "react";
import { connect } from "react-redux";
import GroceryItem from "./GroceryItem";
import { toggleItem, removeItem } from "../store/grocery-store";

const ListComponent = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem
        key={grocery.id}
        {...grocery}
        toggle={props.toggle}
        remove={props.remove}
      />
    ))}
  </ul>
);

const mapState = state => ({ groceries: state.groceries });
const mapDispatch = dispatch => ({
  toggle: id => dispatch(toggleItem(id)),
  remove: id => dispatch(removeItem(id))
});

const GroceryList = connect(mapState, mapDispatch)(ListComponent);
export default GroceryList;
