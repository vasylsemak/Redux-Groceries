import React from "react";
import { connect } from "react-redux";
import GroceryItem from "./GroceryItem";
import { toggleItem } from "../store/grocery-store";

const ListComponent = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.id} {...grocery} onClick={props.onClick} />
    ))}
  </ul>
);

const mapState = state => ({ groceries: state.groceries });
const mapDispatch = dispatch => ({
  onClick : id => dispatch(toggleItem(id))
});

const GroceryList = connect(mapState, mapDispatch)(ListComponent);
export default GroceryList;
